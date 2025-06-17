// server.js - Servidor mejorado para Battleship Online

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
});

const rooms = {}; // { roomId: { players: [socket1, socket2], grids: {}, ready: {}, turn: socketId } }

io.on('connection', (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on('createRoom', (roomId) => {
    socket.join(roomId);
    rooms[roomId] = {
      players: [socket],
      grids: {},
      ready: {},
      turn: null,
    };
    console.log(`Sala creada: ${roomId}`);
  });

  socket.on('joinRoom', (roomId) => {
    const room = rooms[roomId];
    if (room && room.players.length === 1) {
      room.players.push(socket);
      socket.join(roomId);

      // Notificar al creador que se unió otro jugador
      io.to(roomId).emit('opponentReady');
    }
  });

  socket.on('playerReady', (roomId, grid) => {
    const room = rooms[roomId];
    if (!room) return;

    room.grids[socket.id] = grid;
    room.ready[socket.id] = true;

    // Notificar al otro jugador que este está listo
    socket.to(roomId).emit('opponentReady');

    // Si ambos están listos, iniciar juego
    if (Object.keys(room.ready).length === 2) {
      const [player1, player2] = room.players.map((s) => s.id);
      const turn = Math.random() < 0.5 ? player1 : player2;
      room.turn = turn;
      io.to(roomId).emit('startGame', turn);
    }
  });

  socket.on('shoot', (roomId, { x, y }) => {
    const room = rooms[roomId];
    if (!room || room.turn !== socket.id) return;

    const opponent = room.players.find((s) => s.id !== socket.id);
    const opponentGrid = room.grids[opponent.id];

    let hit = false;
    if (opponentGrid[x][y] === 1) {
      opponentGrid[x][y] = 3;
      hit = true;
    } else {
      opponentGrid[x][y] = 2;
    }

    // Enviar resultado al atacante
    socket.emit('shotResult', {
      x,
      y,
      hit,
      yourTurn: hit, // si acierta sigue el turno
    });

    // Enviar disparo al defensor
    opponent.emit('incomingShot', { x, y });

    // Cambiar turno si falló
    if (!hit) {
      room.turn = opponent.id;
    }

    // Comprobar si todos los barcos del oponente están destruidos
    const hasShipsLeft = opponentGrid.flat().includes(1);
    if (!hasShipsLeft) {
      io.to(roomId).emit('gameOver', socket.id);
    }
  });

  socket.on('disconnect', () => {
    console.log(`Usuario desconectado: ${socket.id}`);
    for (const roomId in rooms) {
      const room = rooms[roomId];
      if (room.players.some((s) => s.id === socket.id)) {
        io.to(roomId).emit('gameOver', null);
        delete rooms[roomId];
      }
    }
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor Battleship online escuchando en http://localhost:${PORT}`);
});

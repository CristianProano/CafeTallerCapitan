import React, { useState } from 'react';
import TriviaDelCapitan from './juegos/tribia';
import MemoramaDeSabores from './juegos/memorama';
import SopaDeLetras from './juegos/sopa';  
import BatallaNaval from './juegos/batallanaval';
import Button from './button';
import Image from 'next/image';
import fondo from '../img/madera.jpeg';
const juegos = [
  { nombre: '🎯 Trivia del Capitán', componente: <TriviaDelCapitan /> },
  { nombre: '🧠 Memorama de Sabores', componente: <MemoramaDeSabores /> },
  { nombre: '🔠 Sopa de Letras', componente: <SopaDeLetras /> },
  { nombre: '🚢 Batalla Naval Online', componente: <BatallaNaval /> },
];

const JuegosMenu = () => {
  const [juegoActivo, setJuegoActivo] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4  text-center">
        <Image
          src={fondo}
          layout='fill'
          className="cover opacity-60 fixed top-0 left-0 -z-10"
          alt="Fondo"
        />
      <h1 className="text-4xl font-bold mb-6 text-[#1e4857]">🎮 ¡Juega mientras esperas!</h1>

      {juegoActivo === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {juegos.map((juego, index) => (
            <Button key={index} className="text-xl p-6" onClick={() => setJuegoActivo(index)}>
              {juego.nombre}
            </Button>
          ))}
        </div>
      ) : (
        <div className="w-full max-w-3xl">
          <Button className="mb-4" onClick={() => setJuegoActivo(null)}>
            ⬅️ Volver al menú
          </Button>
          {juegos[juegoActivo].componente}
        </div>
      )}
    </div>
  );
};

export default JuegosMenu;

export default function TriviaDelCapitan() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-3xl font-bold mb-4">Trivia del Capitán</h1>
      <p className="text-lg text-center max-w-2xl">
        La Trivia del Capitán es un juego interactivo que pone a prueba tus conocimientos sobre la historia, cultura y curiosidades del mar. ¡Prepárate para desafiar tu mente y aprender algo nuevo!
      </p>
      <div className="mt-8">
        <img
          src="/path/to/trivia-image.jpg"
          alt="Ejemplo de Trivia del Capitán"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
export default function Origami() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h1 className="text-3xl font-bold mb-4">Origami</h1>
      <p className="text-lg text-center max-w-2xl">
        El origami es el arte japonés de plegar papel para crear figuras y formas. Es una forma de expresión artística que combina precisión, paciencia y creatividad.
      </p>
      <div className="mt-8">
        <img
          src="/path/to/origami-image.jpg"
          alt="Ejemplo de Origami"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
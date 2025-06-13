import Image from "next/image";
import fondo from "./img/portada.png";
import logo from "./img/logo.png";
import Us from "./componets/sobrenosotros";
import madera from "./img/madera.jpeg";
import Portada from "./componets/portada";
export default function Home() {
  return (
    <>
      <div className="relative flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] px-2 pt-2 ">
        {/* Fondo de pantalla */}
        <Image
          src={fondo}

          className="object-fill opacity-60 fixed top-0 left-0 w-full h-full -z-10"
          alt="Fondo"
        />

        {/* Logo 
        <header className="flex justify-center items-center py-4 z-10">
          <Image
            src={logo}
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </header>
        */}

        {/* Main */}
        <main className="relative flex flex-col items-center gap-8 px-4 py-2 sm:px-20 sm:py-14 z-10 border shadow-lg rounded-lg ">
          {/* Componente Us */}

          <div className="w-full h-full"><Portada /></div>

          {/* Imagen de fondo que solo cubre el main */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem' }} className='text-white px-0.5 dark'>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]'>Menú</button>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]'>Sobre Nosotros</button>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]'>Origami</button>
          </div>
        </main>


        {/* Footer */}
        <footer className="flex flex-wrap gap-6 items-center justify-center py-8 z-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.freepik.es/icono/instagram_2111463"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
            Facebook
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Instagram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Tik Tok
          </a>
        </footer>
      </div>
    </>
  );
}

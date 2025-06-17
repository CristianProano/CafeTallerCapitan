"use client"
import React from "react";
import Image from "next/image";
import fondo from "./img/portada.png";
import { useState } from "react";
import Portada from "./componets/portada";
import Menu from "./componets/menu";
import SobreNosotros from "./componets/sobrenosotros";
import Origami from "./componets/origami";
import Juegos from "./componets/juegos";
export default function Home() {
  const [vista, setVista] = useState<'menu' | 'nosotros' | 'origami' | 'portada'|'juegos'>('portada');

  const renderContenido = () => {
    switch (vista) {
      case 'portada':
        return <Portada />;
      case 'nosotros':
        return <SobreNosotros />;
      case 'origami':
        return <Origami />;
      case 'menu':
        return <Menu />;
        case 'juegos':
        return <Juegos />;
      default:
        return <Portada />;
    }
  };
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

          <div className="w-full h-full">
            {renderContenido()}
          </div>

          {/* Imagen de fondo que solo cubre el main */}
          <div style={{ display: 'grid', justifyContent: 'center', gap: '0.2rem' }} className='text-white px-0.5 dark grid-cols-2 gap-4'>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]' onClick={() => setVista('menu')}>Menú</button>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]' onClick={() => setVista('nosotros')}>Sobre Nosotros</button>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]' onClick={() => setVista('origami')}>Origami</button>
            <button style={{ padding: '0.5rem 1.5rem' }} className='bg-[#1e4857]' onClick={() => setVista('juegos')}>Juegos</button>
          </div>
        </main>


        {/* Footer */}
        <footer className="flex flex-wrap gap-6 items-center justify-center py-8 z-10">
         
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.instagram.com/elcapitan_cafe_taller?utm_source=ig_web_button_share_sheet&igsh=MjN6MWdkb3owM2wz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
            Instagram
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.tiktok.com/@el.capitan__?is_from_webapp=1&sender_device=pc"
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

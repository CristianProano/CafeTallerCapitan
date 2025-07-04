'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import fondo from '../img/menuFondo.png';
import Sandwitch from '../img/lomo.png';
import Hambuguesa from '../img/hamburguesa.png';
import simple from '../img/doble.png';
import Canoa from '../img/canoa.png';
import Alitas from '../img/alitas.png';
import Combo from '../img/combo.png';
import Salchi from '../img/salchi.png';
import type { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type MenuVariant = {
  id: string;
  name: string;
  description?: string;
  price?: string;
  imageUrl?: StaticImageData;
  items?: { name: string; price: string }[]; // 👈 Para las sublistas
};


type Category = {
  imageUrl: StaticImageData;
  variants: MenuVariant[];
};

type MenuData = {
  [category: string]: Category;
};

const menuData: MenuData = {
  Sandwiches: {
    imageUrl: Sandwitch,
    variants: [
      {
        id: '1',
        name: 'BOCADO DEL NAVEGANTE',
        description: 'Jamón, queso cheddar, lechuga, tomate, salsa de la casa.',
        price: '2.75',
      },
      {
        id: '2',
        name: 'CARNE A BORDO',
        description: 'Lomo, lechuga, tomate, cebolla, salsa y papas.',
        price: '3.80',
      },
    ],
  },
  Hamburguesas: {
    imageUrl: Hambuguesa,
    variants: [
      {
        id: '3',
        name: 'CLÁSICA DEL CAP',
        description:
          'Carne, cheddar, salsa de la casa, papas, lechuga, cebolla, tomate.',
        price: '2.80',
        imageUrl: simple,
      },
      {
        id: '4',
        name: 'CHALUPA DE ALTAMAR',
        description:
          'Carne, Jamón, cheddar, papas, salsa de la casa, lechuga, tomate, cebolla.',
        price: '3.10',
        imageUrl: simple,
      },
      {
        id: '5',
        name: 'DOBLE CAÑON',
        description:
          'Doble carne, huevo, tocino, pickles, lechuga, tomate, cebolla, salsa de la casa, queso cheddar, papas.',
        price: '3.80',
        imageUrl: Hambuguesa,
      },
      {
        id: '6',
        name: 'BITACORA DE SABOR',
        description:
          'Doble carne, huevo, jamon, salsa de champiñones, tocino, lechuga, cebolla, tomate, queso cheddar, papas, salsa de la casa.',
        price: '4.25',
        imageUrl: Hambuguesa,
      },
    ],
  },
  ALITAS: {
    imageUrl: Alitas,
    variants: [
      {
        id: '7',
        name: 'COMBO 1',
        description: '4 Alitas + 1 salsa + papas + ensalada',
        price: '3.80',
      },
      {
        id: '8',
        name: 'COMBO 2',
        description: '8 Alitas + 2 salsa  + papas + ensalada',
        price: '6.00',
      },
      {
        id: '9',
        name: 'COMBO 3',
        description: '16 Alitas + 2 salsa  + papas + ensalada',
        price: '11.50',
      },
    ],
  },
  'Combo del tesoro': {
    imageUrl: Combo,
    variants: [
      {
        id: '10',
        name: 'COMBO 1',
        description: '1 Hamburguesa doble cañon + 4 alitas + 1 salsa + soda 1LT',
        price: '8.00',
      },
      {
        id: '11',
        name: 'COMBO 2',
        description: '2 Hamburguesa doble cañon + 8 alitas +2 salsas + soda 1LT',
        price: '13.50',
      },
    ],
  },
  'PAPAS FRITAS': {
    imageUrl: Salchi,
    variants: [
      {
        id: '12',
        name: 'SALCHI SIMPLE',
        description: 'Salchicha + papas + ensalada',
        price: '1.75',
      },
      {
        id: '13',
        name: 'MEGAPAPA',
        description: 'Carne + huevo + ensalada + papas',
        price: '2.75',
      },
    ],
  },
  'Especiales del Capitán': {
    imageUrl: Sandwitch, // aún necesario para compatibilidad general
    variants: [
      {
        id: '14',
        name: 'CANÓA PIRATA',
        description:
          'RELLENO:\n1. Pollo en salsa de champiñones + papas + ensalada \n2. Carne en salsa boloñesa + papas + ensalada\n3. Mixto + papas + ensalada',
        price: '4.50',
        imageUrl: Canoa,
      },
      {
        id: '15',
        name: 'BUQUE',
        description:
          'RELLENO:\n1. Pollo en salsa de champiñones + papas + ensalada \n2. Carne en salsa boloñesa + papas + ensalada\n3. Mixto + papas + ensalada',
        price: '4.50',
        imageUrl: Sandwitch,
      },
    ],
  },
  'Bebidas a Bordo': {
    imageUrl: Sandwitch,
    variants: [
      {
        id: '16',
        name: 'FRÍAS',
        description: '', // no usamos aquí
        price: '',
        items: [
          { name: 'Soda', price: '0.75' },
          { name: 'Agua', price: '0.25' },
          { name: 'Guayusa', price: '1.60' },
        ],
      },
      {
        id: '17',
        name: 'CALIENTES',
        description: '',
        price: '',
        items: [
          { name: 'Café pasado ', price: '1.75' },
          { name: 'Aguas Aromáticas', price: '1.00' },
          { name: 'Capuchino', price: '2.10' },
          { name: 'Chocolate Clasico', price: '1.80' },
        ],
      },
    ],
  },


};

const Menu: React.FC = () => {
  const categories = Object.keys(menuData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 = next, -1 = prev

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  }

  const currentCategory = categories[currentIndex];
  const categoryData = menuData[currentCategory];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400, // Reducido de 1000 a 500
      opacity: 0,
      rotateY: direction > 0 ? 60 : -60, // Reducido de 90 a 60 grados
      scale: 0.95, // Agregado efecto de escala
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400, // Reducido de 1000 a 500
      opacity: 0,
      rotateY: direction > 0 ? -60 : 60, // Reducido de 90 a 60 grados
      scale: 0.95, // Agregado efecto de escala
    }),
  }

  return (
    <>

      <div className="relative max-w-5xl mx-auto px-4 py-8 min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={fondo}
            alt="Fondo del menú"
            fill
            className="object-cover opacity-70"
            quality={100}
            priority
            sizes="100vw"
          />
        </div>
        <div className="fixed inset-0 flex items-center justify-between pointer-events-none z-20">
          {/* Botón izquierdo */}
          <button
            onClick={handlePrev}
            className="pointer-events-auto absolute left-0 top-0 h-full w-16 flex items-center justify-start bg-gradient-to-r from-[#1e4857bb] via-[#1e4857]/20 to-transparent transition-opacity duration-300 z-50 group"
          >
            <span className="text-white text-3xl font-bold ml-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">❮</span>
          </button>

          {/* Botón derecho */}
          <button
            onClick={handleNext}
            className="pointer-events-auto  absolute right-0 top-0 h-full w-16 flex items-center justify-end bg-gradient-to-l from-[#1e4857bb] via-[#1e4857]/20 to-transparent transition-opacity duration-300 z-20 group"
          >
            <span className="text-white text-3xl font-bold mr-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">❯</span>
          </button>
        </div>
        <div className="w-full text-right pr-4">
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              color: '#a97455',
              textShadow: `
                -1px -1px 0 #000, 
                1px -1px 0 #000, 
                -1px 1px 0 #000, 
                1px 1px 0 #000
              `,
            }}
          >
            Delicias del capitán
          </h1>
        </div>

        <hr className="w-full border-t-4 border-[#a97455] my-4" />

        {/* Contenido animado */}
        <div className="perspective" style={{ perspective: '2000px' }}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3, // Reducido de 0.7 a 0.4 segundos
                ease: [0.32, 0.72, 0, 1] // Curva de aceleración más rápida
              }}
              className="w-full"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center mb-6">
                <h2
                  className="text-3xl font-bold"
                  style={{ color: '#a97455', WebkitTextStroke: '0.10px black' }}
                >
                  {currentCategory.toUpperCase()}
                </h2>
              </div>

              {/* Render diferente para "Especiales del Capitán" */}
              {currentCategory === 'Especiales del Capitán' ? (
                categoryData.variants.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-4 my-6 border rounded-lg shadow-md p-4 bg-[#f9f9f96a]"
                  >
                    <Image
                      src={item.imageUrl || Sandwitch}
                      alt={item.name}
                      width={180}
                      height={140}
                      className="rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#a97455]">{item.name}</h3>
                      <p className="text-[#574d7c] my-2 whitespace-pre-line text-justify hyphens-auto tracking-normal">{item.description}</p>
                      <p className="text-lg text-[#704d39] font-semibold">${item.price}</p>
                    </div>
                  </div>
                ))
              ) : currentCategory === 'Hamburguesas' ? (
                categoryData.variants.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center gap-4 my-6 border rounded-lg shadow-md p-4 bg-[#f9f9f96a]"
                  >
                    <Image
                      src={item.imageUrl || Sandwitch}
                      alt={item.name}
                      width={180}
                      height={140}
                      className="rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#a97455]">{item.name}</h3>
                      <p className="text-[#574d7c] my-2 text-justify hyphens-auto tracking-normal">{item.description}</p>
                      <p className="text-lg text-[#704d39] font-semibold">${item.price}</p>
                    </div>
                  </div>
                ))
              ) : currentCategory === 'Bebidas a Bordo' ? (
                categoryData.variants.map((variant) => (
                  <div key={variant.id} className="my-6 p-4 border rounded-lg shadow-md bg-[#f9f9f96a]">
                    <h3 className="text-2xl font-bold mb-2 text-[#a97455]">{variant.name}</h3>
                    <ul className="space-y-1 pl-4">
                      {variant.items?.map((item, idx) => (
                        <li key={idx} className="flex justify-between">
                          <span className="text-[#574d7c] ">{item.name}</span>
                          <span className="text-[#704d39] font-semibold">${item.price}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <>
                  {/* Imagen única para las demás categorías */}
                  <div className="flex justify-center mb-6">
                    <Image
                      src={categoryData.imageUrl}
                      alt={currentCategory}
                      width={180}
                      height={140}
                      className="rounded-xl object-cover"
                    />
                  </div>

                  {/* Lista de variantes sin imagen individual */}
                  {categoryData.variants.map((item) => (
                    <div
                      key={item.id}
                      className="my-6 px-2 py-4 border rounded-lg shadow-md bg-[#f9f9f96a]"
                    >
                      <h3 className="text-xl font-bold text-[#a97455]">{item.name}</h3>
                      <p className="text-[#574d7c] my-2 whitespace-pre-line text-justify hyphens-auto tracking-normal">{item.description}</p>
                      <p className="text-lg text-[#704d39] font-semibold">${item.price}</p>
                    </div>
                  ))}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Menu;

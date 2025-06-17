'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import fondo from '../img/menuFondo.png';
import Sandwitch from '../img/sandwitch.png';
import Hambuguesa from '../img/hamburguesa.png';
import type { StaticImageData } from 'next/image';

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
                description: 'Jamón, Queso cheddar, lechuga, tomate, salsa de la casa.',
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
            },
            {
                id: '4',
                name: 'CHALUPA DE ALTAMAR',
                description:
                    'Carne, Jamón, cheddar, papas, salsa de la casa, lechuga, tomate, cebolla.',
                price: '3.10',
            },
            {
                id: '5',
                name: 'DOBLE CAÑON',
                description:
                    'Dos Carnes, huevo, tocino, pickles, lechuga, tomate, cebolla, salsa de la casa, queso cheddar, papas.',
                price: '3.80',
            },
            {
                id: '6',
                name: 'BITACORA DE SABOR',
                description:
                    'Dos carnes, huevo, jamon, champiñones, tocino, lechuga, cebolla, tomate, queso cheddar, papas, salsa de la casa.',
                price: '4.25',
            },
        ],
    },
    ALITAS: {
        imageUrl: Hambuguesa,
        variants: [
            {
                id: '7',
                name: '',
                description: '4 ALITAS + 1SALSA',
                price: '3.80',
            },
            {
                id: '8',
                name: '',
                description: '8 ALITAS + 2 SALSAS',
                price: '6.00',
            },
            {
                id: '9',
                name: '',
                description: '16 ALITAS + 2 SALSAS',
                price: '11.50',
            },
        ],
    },
    'Combo del tesoro': {
        imageUrl: Sandwitch,
        variants: [
            {
                id: '10',
                name: 'COMBO 1',
                description: '1 HAMBURGUESA DOBLE CAÑON + 4 ALITAS+ 1 SALSA + SODA 1LT',
                price: '8.00',
            },
            {
                id: '11',
                name: 'COMBO 2',
                description: '2 HAMBURGUESAS DOBLE CAÑON + 8 ALITAS+2 SALSAS+SODA 1LT',
                price: '13.50',
            },
        ],
    },
    'Papas Fritas': {
        imageUrl: Sandwitch,
        variants: [
            {
                id: '12',
                name: 'SALCHI SIMPLE',
                description: 'SALCHI SIMPLE',
                price: '1.75',
            },
            {
                id: '13',
                name: 'MEGAPAPA',
                description: 'Carne + huevo',
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
                    'RELLENO:\n1. Pollo, S. Champiñones\n2. Carne, Salsa boloñesa\n3. Mixto + papas + ensalada',
                price: '4.50',
                imageUrl: Sandwitch,
            },
            {
                id: '15',
                name: 'BUQUE',
                description:
                    'RELLENO: Carne en salsa a la boloñesa,\ntocino, mozarella, ensalada',
                price: '2.75',
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
                    { name: 'guayusa', price: '1.60' },
                ],
            },
            {
                id: '17',
                name: 'CALIENTES',
                description: '',
                price: '',
                items: [
                    { name: 'CAFÉ PASADO ', price: '1.75' },
                    { name: 'AGUAS AROMÁTICAS', price: '1.00' },
                    { name: 'CAPUCHINO', price: '2.10' },
                    { name: 'CHOCOLATE CLASICO', price: '1.80' },
                ],
            },
        ],
    },


};

const Menu: React.FC = () => {
    const categories = Object.keys(menuData);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
    };

    const currentCategory = categories[currentIndex];
    const categoryData = menuData[currentCategory];

    return (
        <div className="relative max-w-5xl mx-auto px-4 py-8">
            <Image
                src={fondo}
                layout="fill"
                className="cover opacity-70 fixed top-0 left-0 -z-10 shadow-orange-200"
                alt="Fondo"
            />

            <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1e4857] opacity-40 hover:opacity-100 text-white px-4 py-2 rounded-full z-20 shadow-lg"
            >
                ⬅️
            </button>
            <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e4857] opacity-40 hover:opacity-100 text-white px-4 py-2 rounded-full z-20 shadow-lg"
            >
                ➡️
            </button>

            <div className="w-full text-right pr-4">
                <h1
                    className="text-4xl font-bold mb-4"
                    style={{ color: '#a97455', WebkitTextStroke: '1px black' }}
                >
                    Delicias del capitán
                </h1>
            </div>

            <hr className="w-full border-t-4 border-[#a97455] my-4" />

            <div className="text-center mb-6">
                <h2
                    className="text-3xl font-bold"
                    style={{ color: '#a97455', WebkitTextStroke: '1px black' }}
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
                            src={Sandwitch}
                            alt={item.name}
                            width={180}
                            height={140}
                            className="rounded-xl object-cover"
                        />
                        <div>
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-[#574d7c] my-2 whitespace-pre-line">{item.description}</p>
                            <p className="text-lg text-[#a97455] font-semibold">${item.price}</p>
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
                                    <span className="text-gray-800">{item.name}</span>
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
                            <h3 className="text-xl font-bold">{item.name}</h3>
                            <p className="text-[#574d7c] my-2 whitespace-pre-line">{item.description}</p>
                            <p className="text-lg text-[#a97455] font-semibold">${item.price}</p>
                        </div>
                    ))}
                </>
            )
            }
        </div>
    );
};

export default Menu;

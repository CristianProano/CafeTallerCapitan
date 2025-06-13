import React from 'react';
import etiqueta from '../img/etiqueta.png'
import Image from 'next/image';
import logo from '../img/logo1.png';
import fondo from '../img/madera.jpeg';
const Portada: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }} className='h-full w-full'>
      <div style={{ display: 'flex-col', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }} className='flex flex-col items-center'>
       <Image
          src={fondo}
layout='fill'
          className="cover opacity-60 fixed top-0 left-0 -z-10"
          alt="Fondo"
        />
        <Image
          src={etiqueta}
          alt="Imagen 1"
         
          style={{ width: '180px', height: 'auto', borderRadius: '8px' }}
        />
        <Image
          src={logo}
          alt="Imagen 2"
          style={{ width: '250px', height: 'auto', borderRadius: '8px' }}
        />
      </div>
      

    </div>
  );
};

export default Portada;
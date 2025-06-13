import React from 'react';
import Image from "next/image";
import madera from "../img/madera.jpeg";
const SobreNosotros: React.FC = () => {
  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', textAlign: 'center', }}>
      <Image
        src={madera}
        layout="fill"
        className="object-cover opacity-60 absolute top-0 left-0 w-full h-full -z-10"
        alt="Fondo"
      />
      <div
        style={{

          right: 0,
          bottom: 0,
          maxWidth: '400px',
          padding: '24px',
          boxShadow: '0 2px 8px rgba(0,0,1,1)',
        }}
        className="text-wrap"
      >
        <strong>
          <h1 style={{ margin: 0 }}>Sobre Nosotros</h1>
        </strong>
        <p className='whitespace-pre-line text-justify'>
          Bienvenidos a Café Taller El Capitán, un
          lugar donde el aroma del café se mezcla con la pasión por la creación, los recuerdos y el arte del modelismo.
          Este espacio nace del sueño de una familia unida por los hobbies: desde pequeños barcos de vela construidos en el taller de papá, hasta trenes que recorren mesas los sábados, aviones de madera que volaban por el jardín y delicadas figuras de origami que llenaban nuestros cuadernos. Hoy, todo eso toma forma aquí, en este café que no es solo un lugar para compartir una bebida, sino una experiencia para vivirla con las manos, la mente y el corazón.

          El Capitán no es solo un nombre: es un homenaje a quien nos enseñó a amar el detalle, a tener paciencia, y a crear con propósito. Por eso, cada rincón de este lugar está pensado para que niños, adultos, curiosos y apasionados puedan descubrir el mundo del modelismo naval, ferroviario, el aeromodelismo y el arte del papel.

        </p>
      </div>
    </div>
  );
};

export default SobreNosotros;
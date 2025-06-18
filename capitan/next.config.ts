import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['comohacerorigami.net',
      'i.ytimg.com',
      'ejemplo.com',
      'blogger.googleusercontent.com',
      'i.pinimg.com',
      'www.pasajerosdepapel.com',
      'www.shutterstock.com',
      'https://blogger.googleusercontent.com'], // Permite imágenes de YouTube
  },
};

export default withFlowbiteReact(nextConfig);
'use client'; // Esta línea indica que este componente es del lado del cliente

import { useState } from 'react';
import Card from '@/components/card';
import About from '@/components/about';
import Reserva from '@/components/reservas';
import Carrusel from '@/components/carrusel';

export default function Reservas() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-gray-100 font-sans">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">RushWash</div>
          
          {/* Botón de hamburguesa */}
          <button 
            onClick={toggleMenu} 
            className="lg:hidden focus:outline-none">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Menú de navegación */}
          <nav>
            <ul className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} lg:space-x-6 space-y-4 lg:space-y-0`}>
              <li><a href="#aboutme" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#membresias" className="hover:underline">Membresías</a></li>
              <li><a href="#reservas" className="hover:underline">Reservas</a></li>
              <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sección de bienvenida con gradiente azul */}
      <section className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white text-center py-24 md:py-32">
        <h1 className="text-5xl sm:text-6xl font-extrabold">
          ¡Cuidamos tu auto y el planeta!
        </h1>
        <p className="mt-6 text-xl sm:text-2xl">
          RUSHWASH MÁS QUE UN LAVADO DE AUTOS ES UN COMPROMISO CON EL FUTURO        
        </p>
        <a
          href="#membresias"
          className="mt-8 inline-block px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-500 text-lg sm:text-xl"
        >
          Explorar Membresías
        </a>
      </section>

      <section id="aboutme">
        <div>
          <About />
        </div>
      </section>

      {/* Tarjeta centrada */}
      <section id="membresias" className="flex justify-center py-16 bg-gray-100">
        <div className="w-full max-w-7xl px-4">
          <Card />
        </div>
      </section>

      <section id="reservas" className="py-16 bg-gray-50">
        <Reserva />
      </section>

      <section className="flex justify-center py-16 bg-gray-100">
        <div>
          <Carrusel />
        </div>
      </section>

      <footer id="contacto" className="bg-gray-800 text-white text-center py-6">
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858-.182-.466-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.808-.058z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

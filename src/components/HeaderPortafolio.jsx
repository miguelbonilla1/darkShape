import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import darkShapeLogo from '../images/darkshape-logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'typeface-roboto'; // Importa la fuente

const HeaderPortafolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-lg font-roboto sticky top-0 z-50 from-gray-900 via-gray-900 to-gray-900 dark:from-gray-via-gray-300 bg-gradient-to-r text-gray-300 dark:text-gray-200 shadow-md" style={{ maxHeight: '13vh' }}>
      <nav className="container mx-auto p-0 flex items-center lg:pr-10 h-full justify-center">
        <Link to="/" className="flex items-center space-x-2 h-full">
          <img src={darkShapeLogo} alt="DarkShapeStudios Logo" className="h-24 w-auto self-center" style={{ filter: 'invert(1)' }} />
          <span className="text-xl font-bold text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300 lg:pl-3"></span>
        </Link>
        <ul className="hidden md:flex items-center space-x-4 h-full flex-grow justify-center">
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to={{ pathname: '/', hash: '#home' }} onClick={() => setTimeout(() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }), 100)}>
              Home
            </Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to={{ pathname: '/', hash: '#estudio' }} onClick={() => setTimeout(() => document.getElementById('estudio').scrollIntoView({ behavior: 'smooth' }), 100)}>
              Estudio
            </Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to={{ pathname: '/', hash: '#cursos' }} onClick={() => setTimeout(() => document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' }), 100)}>
              Cursos
            </Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to="/portafolio">Proyectos</Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to={{ pathname: '/', hash: '#faq' }} onClick={() => setTimeout(() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' }), 100)}>
              Faq
            </Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to={{ pathname: '/', hash: '#contact' }} onClick={() => setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 100)}>
              Contacto
            </Link>
          </li>
        </ul>
        <a href="https://wa.me/9591509078" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300 mx-4">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
        </a>
        <button className="md:hidden text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú móvil */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-14 right-0 left-0 mx-3 md:hidden`}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 w-full">
            <Link to={{ pathname: '/', hash: '#home' }} onClick={() => { setIsMenuOpen(false); setTimeout(() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Home
            </Link>
            <Link to="/portafolio" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Proyectos
            </Link>
            <Link to={{ pathname: '/', hash: '#faq' }} onClick={() => { setIsMenuOpen(false); setTimeout(() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Faq
            </Link>
            <Link to={{ pathname: '/', hash: '#contact' }} onClick={() => { setIsMenuOpen(false); setTimeout(() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }), 100); }} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderPortafolio;

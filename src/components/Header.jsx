import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import darkShapeLogo from '../images/darkshape-logo.png';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import 'typeface-roboto'; //La fuente

const Header = () => {
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
            <ScrollLink to="home" smooth={true} duration={500}>
              Home
            </ScrollLink>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <ScrollLink to="estudio" smooth={true} duration={500}>
              Estudio
            </ScrollLink>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <ScrollLink to="cursos" smooth={true} duration={500}>
              Cursos
            </ScrollLink>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <Link to="/portafolio">Proyectos</Link>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <ScrollLink to="faq" smooth={true} duration={500}>
              Faq
            </ScrollLink>
          </li>
          <li className="text-white dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300">
            <ScrollLink to="contact" smooth={true} duration={500}>
              Contacto
            </ScrollLink>
          </li>
        </ul>
        <a href="https://wa.me/+56940824538" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300 mx-4">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
        </a>
        <button className="md:hidden text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-300 transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú móvil */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-14 right-0 left-0 mx-3 md:hidden`}>
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 w-full">
            <ScrollLink to="home" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Home
            </ScrollLink>
            <Link to="/portafolio" className="block px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Proyectos
            </Link>
            <ScrollLink to="faq" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Faq
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-300">
              Contacto
            </ScrollLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

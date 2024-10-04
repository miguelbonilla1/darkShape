import React from 'react';
import fotoFernando from '../images/foto-fernando-recortada.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

const Contacto = () => {
  return (
    <section className="font-roboto bg-gray-900 px-6 pt-11 lg:px-8  min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center lg:text-left">
        <h2 className="text-4xl font-bold tracking-tight text-gray-100 mb-">Contáctanos para hablar sobre tus proyectos</h2>
        <p className="text-lg leading-8 text-gray-200 mb-10 ml-1">Ayudamos a tu proyecto musical a tener éxito</p>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="flex flex-col items-center lg:items-center lg:flex-1 lg:justify-center">
            <div className="text-center lg:text-left">
              <p className="text-2xl font-semibold text-gray-100 mb-2">Dirección</p>
              <p className="text-lg text-gray-200 mb-6">Carmen 159, Santiago, Chile</p>
              <div className="flex justify-center lg:justify-center space-x-6">
                <a href="https://www.instagram.com/darkshapestudios/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>


                <a href="https://www.facebook.com/fernandowarmusic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
                <a href="https://www.tiktok.com/@darkshapestudios" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faTiktok} size="3x" />
                </a>

                <a href="https://wa.me/+56940824538" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
                  <FontAwesomeIcon icon={faWhatsapp} size="3x" />
                </a>
              </div>
            </div>
          </div>
          <div className="mb-5 flex flex-col items-center lg:items-center lg:flex-1 lg:justify-center">
          <img
  src={fotoFernando}
  alt="Fernando Guerra"
  className="ml-3 rounded-full overflow-hidden h-[30vh] w-[30vh] md:h-[37vh] md:w-[37vh] lg:h-[140px] lg:w-[140px] mb-4 lg:mb-0 border-2 border-white shadow-2xl"
/>


            <div className=" text-center lg:text-center">
              <div className="pt-2 text-base font-semibold text-gray-200">Fernando Guerra</div>
              <div className=" mb-2 text-sm leading-6 text-gray-200">CEO de DarkshapeStudios</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

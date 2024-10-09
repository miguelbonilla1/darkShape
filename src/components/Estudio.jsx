import PropTypes from 'prop-types';
import fondoEstudio from '../images/fondo6.png';
import fotoEstudio1 from '../images/fotograbacion1.jpg';
import fotoEstudio2 from '../images/fotograbacion2.jpg';
import fotoEstudio3 from '../images/mezcla1.jpg';
import fotoEstudio4 from '../images/mezcla2.jpg';
import fotoEstudio5 from '../images/mastering1.jpg';
import { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Estudio = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <>
      <section
        id="estudio"
        className="py-14 md:py-20 relative flex flex-col justify-center items-center bg-cover bg-center text-white font-roboto"
        style={{ backgroundImage: `url(${fondoEstudio})` }}
      >
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Título */}
        <h1
          className="relative z-10 text-4xl sm:text-5xl text-gray-200 text-center drop-shadow-lg md:pb-4 font-bold"
          style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
        >
          Estudio
        </h1>

        <div className="justify-center relative z-10 flex flex-col items-center md:flex-row md:items-start w-full p-2 py-5 sm:p-4 md:p-6 lg:mb-6">
          {/* Texto de descripción */}
          <div className="md:w-1/2 mb-4 md:mb-0 md:pr-5 lg:max-w-xl lg:ml-11">
            <div className="pl-4 pt-2 flex items-center justify-center h-full bg-gray-900 bg-opacity-75 shadow-lg rounded-lg w-full">
              <p className="px-5 py-4 mb-5 text-xl sm:text-2xl md:text-3xl lg:text-3xl text-gray-200 leading-relaxed pl-3">
                En nuestra página de producción musical, nos enorgullece presentarles una sección dedicada a la creación de servicios de sonidos excepcionales.
              </p>
            </div>
          </div>

          {/* Carrusel de imágenes */}
          <div className="relative md:w-1/2 max-w-4xl w-full overflow-hidden rounded-lg shadow-2xl lg:ml-10">
            <div
              className="flex transition-transform ease-in-out duration-700"
              style={{
                transform: `translateX(-${current * 100}%)`,
                willChange: 'transform', // Optimización para navegadores
              }}
            >
              {slides.map((s, index) => (
                <img
                  key={index}
                  src={s}
                  alt={`Slide ${index + 1}`}
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                  style={{ flexShrink: 0, width: '100%' }} // Garantiza que las imágenes no se encogen
                />
              ))}
            </div>

            {/* Botones de navegación */}
            <div className="absolute inset-0 flex justify-between items-center px-8">
              <button onClick={previousSlide} className="text-5xl text-white hover:text-gray-300">
                <BsFillArrowLeftCircleFill />
              </button>
              <button onClick={nextSlide} className="text-5xl text-white hover:text-gray-300">
                <BsFillArrowRightCircleFill />
              </button>
            </div>

            {/* Indicadores */}
            <div className="absolute bottom-4 flex justify-center w-full gap-2">
              {slides.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full w-4 h-4 cursor-pointer transition-all duration-300 ${i === current ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <span className='separatorTwo mt-0 pt-0'></span>
    </>
  );
};

Estudio.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.string),
};

Estudio.defaultProps = {
  slides: [fotoEstudio1, fotoEstudio2, fotoEstudio3, fotoEstudio4, fotoEstudio5],
};

export default Estudio;

import PropTypes from 'prop-types';
import './separator.css';
import fondoEstudio from '../images/fondo6.png';
import fotoEstudio1 from '../images/fotograbacion1.jpg';
import fotoEstudio2 from '../images/fotograbacion2.jpg';
import fotoEstudio3 from '../images/mezcla1.jpg';
import fotoEstudio4 from '../images/mezcla2.jpg';
import fotoEstudio5 from '../images/mastering1.jpg';




import { useState } from "react";


import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Estudio = ({ slides }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <>
    <section
      id="estudio"
      className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white font-roboto"
      style={{ backgroundImage: `url(${fondoEstudio})` }}
    >
      <h1 className="text-3xl font-bold p-3 text-gray-200">Estudio</h1>

      <div className="flex flex-col md:flex-row items-center w-full p-5">
        <div className="md:w-1/2 mb-5 md:mb-0 md:pr-5">
          <div className="text-center md:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-5">
              En nuestra página de producción musical, nos enorgullece presentarles
              una sección dedicada a la creación de servicios de sonidos
              excepcionales.
            </p>
            <h2 className="text-4xl font-bold text-gray-200 mb-3">Grabación de Audio</h2>
            <h2 className="text-4xl font-bold text-gray-200 mb-3">Mezcla</h2>
            <h2 className="text-4xl font-bold text-gray-200 mb-3">Mastering</h2>
          </div>
        </div>

        <div className="relative md:w-1/2 max-w-4xl w-full overflow-hidden rounded-lg shadow-2xl">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s, index) => (
              <img key={index} src={s} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
            ))}
          </div>

          <div className="absolute inset-0 flex justify-between items-center px-5">
            <button onClick={previousSlide} className="text-3xl">
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide} className="text-3xl">
              <BsFillArrowRightCircleFill />
            </button>
          </div>

          <div className="absolute bottom-4 flex justify-center w-full gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full w-4 h-4 cursor-pointer ${i === current ? 'bg-white' : 'bg-gray-500'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
    <hr className="separator" />
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

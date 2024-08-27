import fondoEstudio from '../images/fondo6.png';
import PropTypes from 'prop-types';
import manito from '../images/darkshape-manito1.png';

const Cursos = ({ cursos }) => {
  return (
    <>
<section
  id="cursos"
  className="w-full relative flex flex-col justify-center items-center min-h-screen max-h-screen bg-cover bg-center text-white font-roboto "
  style={{ backgroundImage: `url(${fondoEstudio})` }}
>

        <div className="w-full max-w-screen-xl p-5">
          <div className="text-center mb-5">
            <h1 className="text-5xl font-bold pb-5 md:pb-8 lg:pb-10 mb-5 lg:mb-10">Cursos</h1>
          </div>
          <div className="text-center lg:text-left mb-5 lg:mb-10">
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-5">
              En darkshapeStudios tenemos una variedad de cursos que puedes hallar en nuestro grupo privado. Únete para mejorar tu dominio en grabación de audio, mezcla y mastering.
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-5">
            {cursos.map((curso, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-75 rounded-lg p-5 shadow-lg w-full md:w-1/3">
                <h2 className="text-2xl font-bold mb-3">{curso.nombre}</h2>
                <p className="text-gray-300 mb-4">{curso.descripcion}</p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700">
                    Inscríbete
                  </button>
                  <img 
                    className="sm:ml-2 mt-2 sm:mt-0" 
                    style={{ height: "100px", width: "100px", filter: "brightness(0) invert(1)" }} 
                    src={manito} 
                    alt="Manito" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <hr className="separator" />
    </>
  );
};

Cursos.propTypes = {
  cursos: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
    })
  ),
};

Cursos.defaultProps = {
  cursos: [
    { nombre: 'Entra a nuestra academia de audio' },
  ],
};

export default Cursos;

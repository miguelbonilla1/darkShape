import fondoEstudio from '../images/fondo6.png';
import PropTypes from 'prop-types';
import manito from '../images/darkshape-manito1.png';

const Cursos = ({ cursos }) => {
  return (
    <>
      <section
        id="cursos"
        className="w-full relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white font-roboto"
        style={{ backgroundImage: `url(${fondoEstudio})` }}
      >
        {/* Overlay semitransparente */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-screen-xl px-5 py-10">
          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-5" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}>
              Cursos
            </h1>
          </div>

          {/* Descripción */}
          <div className=" mb-10 px-1 pl-5">
            <p className="text-xl  sm:text-2xl md:text-3xl lg:text-3xl text-gray-200 leading-relaxed px-5">
              En darkshapeStudios tenemos una variedad de cursos que puedes hallar en nuestro grupo privado. Únete para mejorar tu dominio en grabación de audio, mezcla y mastering.
            </p>
          </div>

          {/* Listado de Cursos */}
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-5">
            {cursos.map((curso, index) => (
              <div
                key={index}
                className="bg-gray-900 bg-opacity-75 rounded-lg p-6 shadow-lg w-full md:w-1/3 px-10"
              >
                {/* Título del Curso */}
                <h2 className="text-2xl font-bold mb-4">{curso.nombre}</h2>

                {/* Descripción del Curso */}
                <p className=" text-xl text-gray-200 font-roboto mb-6">{curso.descripcion}</p>

                {/* Botón e Imagen */}
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
    { nombre: 'Entra a nuestra academia de audio', descripcion: 'Aprende desde lo básico hasta lo avanzado en grabación de audio.' },
  ],
};

export default Cursos;

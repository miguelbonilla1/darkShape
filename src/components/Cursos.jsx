import fondoEstudio from '../images/fondo6.png';
import PropTypes from 'prop-types';

const Cursos = ({ cursos }) => {
  return (
    <>
    <section
      id="cursos"
      className="relative flex flex-col justify-center items-center min-h-screen bg-cover bg-center text-white font-roboto"
      style={{ backgroundImage: `url(${fondoEstudio})` }}
    >
      <div className="w-full max-w-screen-xl p-5">
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold pb-10 mb-10">Cursos</h1>
        </div>
        <div className="text-center lg:text-left mb-5 lg:mb-10">
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-5">
            En darkshapeStudios tenemos una variedad de cursos que puedes hayar en nuestro grupo privado. Únete para conseguir mejorar tu dominio en grabación de audio, mezcla y mastering.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {cursos.map((curso, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-75 rounded-lg p-5 shadow-lg">
              <h2 className="text-2xl font-bold mb-3">{curso.nombre}</h2>
              <p className="text-gray-300 mb-4">{curso.descripcion}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Más información
              </button>
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
    { nombre: 'Curso 1', descripcion: 'Descripción del curso 1' },
    { nombre: 'Curso 2', descripcion: 'Descripción del curso 2' },
    { nombre: 'Curso 3', descripcion: 'Descripción del curso 3' },
  ],
};

export default Cursos;

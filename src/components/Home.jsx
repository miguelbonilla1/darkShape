import darkshapeportada from '../images/darkshapeportada.png';
import './separator.css';

const Home = () => {
  return (
    <>
      <section className="relative" style={{ minHeight: '92.5vh', background: `url(${darkshapeportada})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Contenido adicional de la sección si es necesario */}
      </section>
      <hr className="separator" />
    </>
  );
};

export default Home;

import Header from './components/Header'
import Home from './components/Home'
import Estudio from './components/Estudio'
import Cursos from './components/Cursos'
import Faq from './components/Faq'
import Contacto from './components/Contacto'
import Portafolio from './components/Portafolio'
import { config } from '@fortawesome/fontawesome-svg-core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already being imported

function App() {
  return (
       <>
      <Header />

      <div id="home">
      <Home />
      </div>
      <div id="estudio">
      <Estudio />
         </div>
  
        <div id="cursos">
      <Cursos />
      </div>
      
      <div id="faq">
      <Faq />
      </div>
      <div id="contact">
      <Contacto />
      </div>
      </>   
      
   
  );
}

export default App;

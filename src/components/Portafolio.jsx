
import HeaderPortafolio from './HeaderPortafolio';
import fondoEstudio from '../images/fondo6.png';

import a from '../images/a.jpg';
import across from '../images/across-the-ruins.jpg';
import amnesia from '../images/amnessia-eterna.jpg';
import antidope from '../images/antidope.jpg';
import b from '../images/b.jpg';
import barbiLove from '../images/barbilove.jpg';
import despair from '../images/despair.jpg';
import drawin from '../images/drawin-the-sun-annie.jpg';
import ef from '../images/ef.jpg';
import enelCamino from '../images/enelcaminoaprendi.jpg';
import ferminDeath from '../images/fermindeath.jpg';
import forcedDeparture from '../images/forceddeparture.jpg';
import franciscoBandcamp from '../images/franciscobandcamp.jpg';
import guiltysin from '../images/guiltysin.jpg';
import inmunity from '../images/inmunity-machine.jpg';
import komozea from '../images/komozea.jpg';
import malaspecto from '../images/malaspecto.png';
import navidadPunk from '../images/navidad-punk-pop.jpg';
import traslacion from '../images/traslacion.jpg';
import obnoxius from '../images/obnoxius.jpg';
import volverteAver from '../images/volverte-aver.png';




const Portafolio = () => {
  // Datos de las bandas (puedes reemplazarlos con tus propios datos)
  const bandas = [
    { nombre: "Banda 1", imagen: a },
    { nombre: "Banda 2", imagen: across },
    { nombre: "Banda 3", imagen: amnesia},
    { nombre: "Banda 4", imagen: antidope },
    { nombre: "Banda 5", imagen: b },
    { nombre: "Banda 6", imagen: barbiLove },
    { nombre: "Banda 7", imagen: despair },
    { nombre: "Banda 8", imagen: drawin },
    { nombre: "Banda 9", imagen: ef },
    { nombre: "Banda 10", imagen: enelCamino },
    { nombre: "Banda 11", imagen: ferminDeath },
    { nombre: "Banda 12", imagen: forcedDeparture },
    { nombre: "Banda 13", imagen: franciscoBandcamp },
    { nombre: "Banda 14", imagen: inmunity },
    { nombre: "Banda 15", imagen: komozea },
    { nombre: "Banda 16", imagen: malaspecto },
    { nombre: "Banda 17", imagen: navidadPunk },
    { nombre: "Banda 18", imagen: obnoxius },
    { nombre: "Banda 19", imagen: traslacion },
    { nombre: "Banda 20", imagen: volverteAver },
    
    // Agrega más bandas según sea necesario
  ];

  return (
    <>
    <HeaderPortafolio />  
      <section className='font-roboto' style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: `url(${fondoEstudio})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-gray-200 text-3xl font-bold mb-8 text-center">Portafolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bandas.map((banda, index) => (
            <div style={{height:'360px'}} key={index} className="bg-gray-100 rounded-md overflow-hidden">
              <img style={{height:'360px'}} src={banda.imagen} alt={banda.nombre} className="w-full h-full object-cover" />
              
            </div>
          ))}
        </div>
      </div>
    </section>
    </>

  );
};

export default Portafolio;
import React, { useState } from 'react';
import fondoEstudio2 from '../images/fondo2.png';

const Faq = () => {
  const faqs = [
    {
      question: " ¿Qué es DarkShapeStudios?",
      answer: "Es un estudio de grabación, mezcla y mastering ubicado en Santiago, Chile. También damos cursos online."
    },
    {
      question: "¿Cómo trabajo con ustedes?",
      answer: "Puedes contactarnos en la pestaña de contacto, donde estará nuestro whatsapp y correo."
    },
    {
      question: "Estoy en otro pais ¿Cómo trabajo con ustedes?",
      answer: "El tiempo de entrega depende del método de envío seleccionado y la ubicación de entrega. Por lo general, los pedidos se entregan dentro de 3-5 días hábiles."
    },
    {
      question: "¿Cuánto tiempo tarda en llegar mi pedido?",
      answer: "En caso de querer mezclar o masterizar con nosotros tendrías que enviarnos el material y nosotros lo trabajamos. Los cursos se venden de manera online."
    },
    {
      question: "¿Qué formato se necesita para la mezcla y el mastering?",
      answer: "Tienen que ser formatos de audio WAV en 44.1hz o 48. Se debe estar conforme con la grabación y esta debe estar editada. Si nunca has mandado una sesión te dejo un video explicándolo https://youtu.be/xbqsBXivNds"
    },
    {
      question: "¿En qué programa trabajan?",
      answer: "Studio One es nuestra plataforma principal, al enviar solo audios no hay problema con el tipo de programa."
    },
    {
      question: "¿Envie mi mezcla, en cuanto tiempo la tendria de vuelta?",
      answer: "El aproximado es de 3 días máximo, dependiendo de la cantidad de tracks y complejidad de la banda."
    },
    {
      question: "¿Cuáles son los métodos de pago?",
      answer: "Se puede pagar con cualquier tarjeta Visa o Mastercard. En el caso de Chile, puedes contactarnos y te daremos el número de cuenta de banco."
    },
    {
      question: "¿Qué equipos ocupan?",
      answer: "Tenemos equipos de alta gama como los Yamaha NS10, Audient, Focusrite, audífonos VSX, un SSL bus compresor, además de los mejores plugins del mercado."
    },
    {
      question: "¿Cuánto duran los cursos?",
      answer: "La duración del curso no suele pasar de las 8 horas y se puede ver las veces que quieras en nuestra web."
    },
    {
      question: "¿Qué valor tiene el mezclar y masterizar?",
      answer: "Los precios van desde los 29$. Contáctanos para más información."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="font-roboto py-20 relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${fondoEstudio2})` }}>
      <div className="bg-white bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto sm:px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-roboto mb-6" style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)" }}>Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button className="w-full flex justify-between items-center py-3 focus:outline-none transition-all duration-300 ease-in-out" onClick={() => toggleAccordion(index)}>
                <span className="font-roboto text-xl font-roboto">{faq.question}</span>
                <span className="font-roboto text-gray-900">{activeIndex === index ? '▲' : '▼'}</span>
              </button>
              {activeIndex === index && (
                <div className="py-3 transition-all duration-500 ease-in-out">
                  <p className=" text-lg font-roboto text-gray-900">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

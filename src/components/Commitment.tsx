import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SlideRightAnimation from './animations/SlideRight';
import MoveUpAnimation from './animations/SlideUp';

const Commitment: React.FC = () => {
  const videoId = 'dQw4w9WgXcQ';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const blockquoteRef = useRef(null);
  const isInView = useInView(blockquoteRef, { once: true });

  return (
    <section className="pt-16 pb-32 px-8 md:px-16 flex flex-col justify-center items-center">
      <motion.div
        ref={blockquoteRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="w-full"
      >
        <blockquote className="italic text-lg md:text-3xl text-center mb-8">
          "Numa geração que sonha com um futuro melhor, na JUNITEC transformamos ideias em ações que impactam o presente."
          <span className="block mt-4 text-lg md:text-xl font-light text-end">Marta Fernandes, Secretária-Geral e responsável de ESG da JUNITEC</span>
        </blockquote>
      </motion.div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center relative">
        <SlideRightAnimation direction="right" endY={-30} endX={50} className="absolute inset-0 bg-[#F3EEE9] z-0 w-[50%] h-[110%]">
          <div></div>
        </SlideRightAnimation>
        
        <SlideRightAnimation
          direction="right"
          className="relative z-10 md:w-4/5 max-w-xl bg-[#175FAAED] text-white p-8 shadow-lg flex flex-col justify-start transform translate-y-10 ml-4"
        >
          <h2 className="text-3xl font-bold mb-8 text-start">O NOSSO COMPROMISSO</h2>
          <p className="text-l text-justify pr-20 ">
            Acreditamos que, mais do que júnior empresários, somos agentes de transformação, responsáveis por contribuir para um futuro melhor. Por isso, criámos um plano de ação que reflete o nosso compromisso com a <span className="font-bold">responsabilidade social</span>, onde, além de <span className="font-bold">doações</span> monetárias e em espécie, promovemos um programa interno de <span className="font-bold">voluntariado</span>, incentivando os nossos membros a envolver-se em iniciativas que impactam positivamente a sociedade.
          </p>
          <p className="text-l text-justify pr-20 pt-10 ">
            Neste ano, reforçámos esse compromisso. Elaborámos o nosso primeiro <span className="font-bold">relatório ESG</span>, consolidando práticas que integram os pilares Ambiental, Social e Governança, em parceria com entidades de renome, como a <span className="font-bold">Veolia</span> e a <span className="font-bold">A.T Kearney.</span> Esta abordagem traduz a nossa dedicação em atuar de forma consciente, deixando uma marca positiva no presente e inspirando as gerações futuras.
          </p>
        </SlideRightAnimation>

        
        <MoveUpAnimation direction="up" className="absolute top-[calc(50%-50px)] left-[calc(50%-50px)] md:w-3/5 aspect-video bg-gray-200 overflow-hidden shadow-lg transform md:translate-y-10 md:-translate-x-16 z-20">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </MoveUpAnimation>
      </div>
    </section>
  );
};

export default Commitment;
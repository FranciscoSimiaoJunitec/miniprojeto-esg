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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          <span className="block mt-4 text-lg md:text-xl font-light text-end">Carlos Rebelo, Presidente da JUNITEC</span>
        </blockquote>
      </motion.div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center relative">
        <SlideRightAnimation direction="right" endY={-30} endX={50} className="absolute inset-0 bg-[#F3EEE9] z-0 w-[60%] h-[120%]">
          <div></div>
        </SlideRightAnimation>
        
        <SlideRightAnimation direction="right" className="relative z-10 md:w-1/2 max-w-xl bg-[#175FAAED] text-white p-8 shadow-lg flex flex-col justify-start transform translate-y-10">
          <h2 className="text-3xl font-bold mb-8 text-start">O NOSSO COMPROMISSO</h2>
          <p className="text-2xl text-justify pr-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </SlideRightAnimation>
        
        <MoveUpAnimation direction="up" className="absolute top-[calc(50%-30px)] left-[calc(50%-30px)] md:w-3/5 aspect-video bg-gray-200 overflow-hidden shadow-lg transform md:translate-y-10 md:-translate-x-16 z-20">
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
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Counter from './animations/Counter';

const Progress: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="flex justify-center text-[#00277D] flex-col text-2xl font-bold pt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className='text-left absolute font-700 pl-8 text-4xl md:text-6xl -translate-y-20 md:-translate-y-24 pb-10'>PROGRESSO 2024</h1>
      <div className='flex flex-row py-12 px-8 justify-between bg-[#F3EEE9]'>
        <motion.div 
          className='w-1/4'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className='text-center text-3xl md:text-5xl mb-2'>
            {isInView && <Counter from={0} to={31} duration={2} />}
          </h2>
          <p className='text-center text-sm'>Horas de</p>
          <p className='text-center text-sm'>Voluntariado</p>
        </motion.div>
        
        <motion.div 
          className='w-1/4'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className='text-center text-3xl md:text-5xl mb-2'>
            {isInView && <Counter from={0} to={8} duration={1.5} />}
          </h2>
          <p className='text-center text-sm'>Associações</p>
          <p className='text-center text-sm'>Impactadas</p>
        </motion.div>
        
        <motion.div 
          className='w-1/4'
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className='text-center text-3xl md:text-5xl mb-2'>
            {isInView && <Counter from={0} to={6500} duration={3.0} />}€
          </h2>
          <p className='text-center text-sm '>Doações</p>
          <p className='text-center text-sm '>à Comunidade</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Progress;

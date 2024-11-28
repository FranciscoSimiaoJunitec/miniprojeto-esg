import React from 'react';

const Progress: React.FC = () => {
  return (
      <div className="flex justify-center text-[#00277D] flex-col text-2xl font-bold pt-8">
        <h1 className='text-left absolute font-700 pl-8 text-6xl -translate-y-24 pb-10'>PROGRESSO</h1>
        <div className='flex flex-row py-12 px-8 justify-evenly bg-[#F3EEE9]'>
            <div className='w-1/6'>
                <h2 className='text-center text-5xl mb-2'>31</h2>
                <p className='text-center'>Horas de Voluntariado</p>
            </div>
            <div className='w-1/5'>
                <h2 className='text-center text-5xl mb-2'>4</h2>
                <p className='text-center'>Associações Impactadas</p>
            </div>
            <div className='w-1/5'>
                <h2 className='text-center text-5xl mb-2'>350</h2>
                <p className='text-center'>Euros Doados</p>
            </div>
        </div>
      </div>
  );
};

export default Progress;

import React from 'react';
import PortugalMap from './PortugalMap';


const MapText: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white">
 
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">
          "Ajudar Nunca Foi Tão Fácil"
        </h2>
        <p className="text-lg mb-6 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="font-semibold text-lg text-center md:text-left">
          Clica num Distrito ou Região Autónoma para veres as associações
          disponíveis!
        </p>
      </div>

   
      <div className="w-full md:w-1/2 relative" style={{ height: '500px' }}>
        <div className="absolute inset-0">
          <PortugalMap />
          
        </div>
      </div>
    </div>
  );
};

export default MapText;

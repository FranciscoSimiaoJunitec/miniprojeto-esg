import React from 'react';
import PortugalMap from './PortugalMap';
import { ImQuotesLeft } from "react-icons/im";
import MadeiraMap from './MadeiraMap';
import AcoresMap from './AcoresMap';
const MapText: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white">
      <div
        className="w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-start"
        style={{ marginTop: '100px', marginLeft: '20px' }}
      >
        <div className="flex items-center justify-center mb-8 whitespace-nowrap">
          <ImQuotesLeft className="mr-4 text-6xl" />
          <h2 className="text-5xl font-bold italic whitespace-nowrap">
            Ajudar Nunca Foi Tão Fácil
          </h2>
        </div>
        <p className="text-2xl mb-8 text-justify pr-48">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className="font-semibold text-2xl text-justify pr-48">
          Clica num Distrito ou Região Autónoma para veres as associações disponíveis!
        </p>
      </div>

     
      <div className="w-full md:w-1/2 relative" style={{ minHeight: '700px' }}>
        
        <div className="absolute z-30" 
          style={{ 
            top: '75%', 
            left: '10%', 
            transform: 'translate(-55%, -45%) scale(0.95)',
            width: '70%',
            
          }}>
          <MadeiraMap tooltipId="madeira-tooltip" />
        </div>
        <div className="absolute z-20" 
          style={{ 
            top: '60%', 
            left: '-25%', 
            transform: 'translate(-50%, -55%) scale(0.95)',
            width: '120%',
          
          }}>
          <AcoresMap tooltipId="acores-tooltip" />
        </div>
        <div className="absolute inset-0 z-10" 
          style={{ 
            right: '-20%', 
            transform: 'translateX(-12.2%) scale(1)',
           
          }}>
          <PortugalMap tooltipId="portugal-tooltip" />
        </div>
      </div>
      </div>
    
  );
};

export default MapText;

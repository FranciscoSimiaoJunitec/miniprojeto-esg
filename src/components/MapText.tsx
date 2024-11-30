import React from 'react';
import PortugalMap from './Maps/PortugalMap';
import { ImQuotesLeft } from "react-icons/im";
import MadeiraMap from './Maps/MadeiraMap';
import AcoresMap from './Maps/AcoresMap';
import SlideInAnimation from './animations/MapSlide';

const MapText: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white">
      <SlideInAnimation direction="left" className="w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-start mt-24 ml-5">
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
      </SlideInAnimation>

      <div className="w-full md:w-1/2 relative" style={{ minHeight: '700px' }}>
        <SlideInAnimation direction="right" className="absolute z-30 top-[55%] left-[-15%] transform translate-x-[-55%] translate-y-[-45%] scale-[0.95] w-[70%]">
          <MadeiraMap tooltipId="madeira-tooltip" />
        </SlideInAnimation>
        <SlideInAnimation direction="right" className="absolute z-20 top-[20%] left-[-75%] transform translate-x-[-50%] translate-y-[-55%] scale-[0.95] w-[120%]">
          <AcoresMap tooltipId="acores-tooltip" />
        </SlideInAnimation>
        <SlideInAnimation direction="right" className="absolute inset-0 z-10 right-[-20%] transform translate-x-[-12.2%] scale-[1]">
          <PortugalMap tooltipId="portugal-tooltip" />
        </SlideInAnimation>
      </div>
    </div>
  );
};

export default MapText;

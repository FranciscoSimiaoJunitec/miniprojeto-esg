import React, { useState } from 'react';
import PortugalMap from './Maps/PortugalMap';
import { ImQuotesLeft } from 'react-icons/im';
import MadeiraMap from './Maps/MadeiraMap';
import AcoresMap from './Maps/AcoresMap';
import SlideInAnimation from './animations/MapSlide';
import SideBar from './SideBar';

const MapText: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<any | null>(null);

  const handleSelectedRegion = (region: number) => {
    setSelectedRegion(region);
  };

  return (
    <section id="map-section"
      className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white relative"
    >
      {/* Text Section */}
      <SlideInAnimation
        direction="left"
        className="w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-start mt-24 ml-5 md:ml-0"
      >
        <div className="flex items-center justify-center mb-8 whitespace-nowrap">
          <ImQuotesLeft className="mr-4 text-6xl" />
          <h2 className="font-bold italic whitespace-nowrap text-xl md:text-5xl">
            Ajudar Nunca Foi Tão Fácil
          </h2>
        </div>
        <p className="pr-40px mb-8 md:pr-48 text-md md:text-xl text-justify md:text-justify">
        Reunimos mais de <span className="font-bold">50 associações </span> 
        de diferentes áreas de impacto num único mapa interativo, em constante 
        atualização, abrangendo todo o território nacional, de Norte a Sul de 
        Portugal. Se queres ajudar, mas não sabes por onde começar, basta explorares 
        as associações disponíveis. Com apenas alguns cliques, encontra a causa que 
        mais ressoa contigo e descobre como fazer a diferença. Simples ações podem 
        criar um enorme impacto na vida de alguém.
        </p>
        <p className="font-semibold  md:pr-48 text-lg md:text-2xl text-center md:text-justify">
          Clica num Distrito ou Região Autónoma para veres as associações
          disponíveis!
        </p>
      </SlideInAnimation>

      {/* Map Section */}
      <div className="w-full md:w-1/2 relative" style={{ minHeight: '700px' }}>
        <SlideInAnimation
          direction="right"
          className="absolute z-30 top-[55%] left-[-15%] transform translate-x-[-55%] translate-y-[-45%] scale-[0.95] w-[70%]"
        >
          <MadeiraMap 
            tooltipId="madeira-tooltip" 
            selectedRegion={selectedRegion}
            setSelectedRegion={handleSelectedRegion}
          />
        </SlideInAnimation>

        <SlideInAnimation
          direction="right"
          className="absolute z-20 top-[20%] left-[-75%] transform translate-x-[-50%] translate-y-[-55%] scale-[0.95] w-[120%]"
        >
          <AcoresMap 
            tooltipId="acores-tooltip" 
            selectedRegion={selectedRegion}
            setSelectedRegion={handleSelectedRegion}
          />
        </SlideInAnimation>

        <SlideInAnimation
          direction="right"
          className="absolute inset-0 z-10 right-[-20%] transform translate-x-[-12.2%] scale-[1]"
        >
          <PortugalMap
            tooltipId="portugal-tooltip"
            selectedRegion={selectedRegion}
            setSelectedRegion={handleSelectedRegion}
          />
        </SlideInAnimation>
      </div>

      {/* Sidebar */}
      {selectedRegion !== null && (
        <SideBar
          regionID={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onClearRegion={() => setSelectedRegion(0)}
        />
      )}
    </section>
  );
};

export default MapText;
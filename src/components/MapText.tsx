import React, { useState } from 'react';
import PortugalMap from './Maps/PortugalMap';
import { ImQuotesLeft } from 'react-icons/im';
import MadeiraMap from './Maps/MadeiraMap';
import AcoresMap from './Maps/AcoresMap';
import SlideInAnimation from './animations/MapSlide';
import SideBar from './SideBar';

const MapText: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<any | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleClearRegion = () => {
    setSelectedRegion("ALL");
    setShowAll(true);
  };

  const handleSelectedRegion = (region: any) => {
    setSelectedRegion(region);
    setShowAll(false);
  };

  return (
    <div id="map-section"
      className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white relative"
    >
      {/* Text Section */}
      <SlideInAnimation
        direction="left"
        className="w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-start mt-24 ml-5"
      >
        <div className="flex items-center justify-center mb-8 whitespace-nowrap">
          <ImQuotesLeft className="mr-4 text-6xl" />
          <h2 className="text-5xl font-bold italic whitespace-nowrap">
            Ajudar Nunca Foi Tão Fácil
          </h2>
        </div>
        <p className="text-xl mb-8 text-justify pr-48">
        Reunimos mais de <span className="font-bold">50 associações</span> 
        de diferentes áreas de impacto num único mapa interativo, em constante 
        atualização, abrangendo todo o território nacional, de Norte a Sul de 
        Portugal. Se queres ajudar, mas não sabes por onde começar, basta explorares 
        as associações disponíveis. Com apenas alguns cliques, encontra a causa que 
        mais ressoa contigo e descobre como fazer a diferença. Simples ações podem 
        criar um enorme impacto na vida de alguém.
        </p>
        <p className="font-semibold text-2xl text-justify pr-48">
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
      {selectedRegion && (
        <SideBar
          region={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onClearRegion={handleClearRegion}
          showAll={showAll}
          setShowAll={setShowAll}
        />
      )}
    </div>
  );
};

export default MapText;
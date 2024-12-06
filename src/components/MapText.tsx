import React, { useState, useEffect } from 'react';
import PortugalMap from './Maps/PortugalMap';
import { ImQuotesLeft } from 'react-icons/im';
import MadeiraMap from './Maps/MadeiraMap';
import AcoresMap from './Maps/AcoresMap';
import SlideInAnimation from './animations/MapSlide';
import SideBar from './SideBar';

const MapText: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<any | null>(null);
  const [showMap, setShowMap] = useState(false); // Controle da visibilidade do mapa
  const [isMobile, setIsMobile] = useState(false); // Controle para comportamento em mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectedRegion = (region: number) => {
    setSelectedRegion(region);
  };

  const handleShowMap = () => {
    setShowMap(true); // Exibe o mapa
  };

  const handleCloseSideBar = () => {
    setSelectedRegion(null);
    if (isMobile) {
      setShowMap(true); // Reexibe o mapa no mobile ao fechar a Sidebar
    }
  };

  return (
    <section
      id="map-section"
      className="min-h-[calc(100vh-200px)] flex flex-col md:flex-row items-start justify-between bg-gradient-to-b from-[#3e7ab9] to-[#053581] p-8 text-white relative"
    >
      {/* Texto */}
      <SlideInAnimation
        direction="left"
        className={`w-full md:w-2/3 mb-8 md:mb-0 flex flex-col items-center justify-start mt-24 md:ml-0 transition-opacity duration-500 ${
          selectedRegion ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="flex items-center justify-center mb-8 whitespace-nowrap">
          <ImQuotesLeft className="mr-4 text-6xl" />
          <h2 className="font-bold italic whitespace-nowrap text-xl md:text-5xl text-center">
            Ajudar Nunca Foi Tão Fácil
          </h2>
        </div>
        <p className="mb-8 text-md md:text-xl text-center md:text-justify">
          Reunimos mais de <span className="font-bold">50 associações</span> de diferentes áreas de impacto num único mapa interativo, em constante
          atualização, abrangendo todo o território nacional, de Norte a Sul de Portugal. Se queres ajudar, mas não sabes por onde começar, basta explorares
          as associações disponíveis. Com apenas alguns cliques, encontra a causa que mais ressoa contigo e descobre como fazer a diferença. Simples ações
          podem criar um enorme impacto na vida de alguém.
        </p>
        <p className="font-semibold text-lg md:text-2xl text-center md:text-justify">
          {showMap || !isMobile
            ? 'Clica num Distrito ou Região Autónoma para veres as associações disponíveis!'
            : 'Clica no botão abaixo para explorar o mapa interativo!'}
        </p>
        {/* Renderização condicional do botão "Ver Mapa" */}
        {!showMap && !selectedRegion && isMobile && (
          <button
            onClick={handleShowMap}
            className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-full mt-4 md:hidden"
          >
            Ver Mapa
          </button>
        )}
      </SlideInAnimation>

      {/* Mapa */}
      {(showMap || !isMobile) && (
        <div
          className={`w-full md:w-1/2 relative ${
            selectedRegion && isMobile ? 'hidden' : ''
          }`}
          style={{ minHeight: '700px' }}
        >
          <SlideInAnimation
            direction="right"
            className="absolute z-30 top-[55%] left-[-15%] md:left-[-25%] transform translate-x-[-55%] translate-y-[-45%] scale-[1.1] md:scale-[0.95] w-[80%] md:w-[70%] "
          >
            <MadeiraMap
              tooltipId="madeira-tooltip"
              selectedRegion={selectedRegion}
              setSelectedRegion={handleSelectedRegion}
            />
          </SlideInAnimation>

          <SlideInAnimation
            direction="right"
            className="absolute z-20 top-[30%] left-[-75%] md:left-[-75%] transform translate-x-[-50%] translate-y-[-55%] scale-[1.1] md:scale-[0.95] w-[120%] md:w-[120%]"
          >
            <AcoresMap
              tooltipId="acores-tooltip"
              selectedRegion={selectedRegion}
              setSelectedRegion={handleSelectedRegion}
            />
          </SlideInAnimation>

          <SlideInAnimation
            direction="right"
            className="absolute inset-0 z-10 right-[-20%] md:right-[-5%] transform translate-x-0 scale-[1.1] md:scale-[1]"
          >
            <PortugalMap
              tooltipId="portugal-tooltip"
              selectedRegion={selectedRegion}
              setSelectedRegion={handleSelectedRegion}
            />
          </SlideInAnimation>
        </div>
      )}

      {/* Sidebar */}
      {selectedRegion !== null && (
        <SideBar
          regionID={selectedRegion}
          onClose={handleCloseSideBar}
          onClearRegion={() => setSelectedRegion(0)}
          setShowMap={setShowMap}
        />
      )}
    </section>
  );
};

export default MapText;

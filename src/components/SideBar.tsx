import React, { useState } from 'react';
import SlideInAnimation from './animations/MapSlide';
import InstitutionBoard from './InstitutionBoard';
import allInstitutions from '../assets/allInstitutions.json';

type SideBarProps = {
  regionID: number | null;
  onClose: () => void;
  onClearRegion: () => void;
  setShowMap: (show: boolean) => void; // Add setShowMap prop
};

const SideBar: React.FC<SideBarProps> = ({ regionID, onClose, onClearRegion, setShowMap }) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>('Impacto');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const region = allInstitutions.find((region) => region.id === regionID);

  const filters = ['---', 'Social', 'Cultural', 'Ambiental', 'Animal'];

  const handleSelectFilter = (filter: string) => {
    if (filter === '---') {
      setSelectedFilter('Impacto');
    } else {
      setSelectedFilter(filter);
    }
    setIsDropdownOpen(false);
  };

  const handleShowAll = () => {
    onClearRegion();
    setShowMap(false); // Hide the map on mobile
  };

  const handleClose = () => {
    onClose();
    if (window.innerWidth <= 768) {
      setShowMap(true); // Show the map on mobile
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <SlideInAnimation
      direction="left"
      className="absolute top-0 left-0 h-full w-full md:w-1/2 bg-white text-black p-6 z-40"
    >
      <div className="relative">
        <button
          onClick={handleClose}
          className="absolute top-1/2 transform -right-6 md:translate-x-9 md:rotate-180 text-gray-600 text-4xl bg-[#D6D6D6] bg-opacity-80 hover:text-gray-700 px-2 py-4 z-10"
          style={{
            clipPath: 'polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%)',
          }}
        >
          &times;
        </button>
        <div className="mt-12">
          <div className='flex flex-row justify-between pr-12'>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">{regionID === 0 ? "Portugal" : region?.region.toUpperCase()}</h1>
            {regionID !== 0 &&
              <p
                className="md:pt-4 text-sm pt-3 hover:underline cursor-pointer"
                onClick={handleShowAll}
              >
                VER TODOS
              </p>
            }
          </div>
          <div className="w-11/12 h-0.5 bg-gray-300 mb-4"></div>
          <p className="text-sm md:text-base mt-4">
            Clica numa associação para veres mais detalhes
          </p>
          <div className="flex items-center mt-10">
            {/* Dropdown Menu */}
            <div className="relative flex flex-row md:gap-8 gap-16">
              {/* Header */}
              <h3 className="text-sm md:text-base ml-4 mt-2">Filtrar por:</h3>
              <button
                onClick={toggleDropdown}
                style={{ backgroundColor: '#2790CA', color: '#FFFFFF' }}
                className="font-semibold py-1 px-6 md:w-64 w-44 border border-gray-400 rounded shadow flex items-center justify-between"
              >
                {selectedFilter}
                <span
                  className={`ml-2 transform transition-transform ${isDropdownOpen ? 'rotate-90' : ''}`}
                >
                  &gt;
                </span>
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-10 md:mt-12 right-0 md:left-32 md:w-64 w-44 bg-[#2790CA] text-white border border-gray-300 rounded shadow-lg z-50">
                  {filters.map((filter) => (
                    <li
                      key={filter}
                      onClick={() => handleSelectFilter(filter)}
                      className="px-4 py-2 hover:bg-[#1e6f9f] cursor-pointer"
                    >
                      {filter}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <InstitutionBoard
            regionID={region ? region.id : 0}
            filter={selectedFilter === 'Impacto' ? null : selectedFilter}
          />
          <br />
        </div>
      </div>
    </SlideInAnimation>
  );
};

export default SideBar;
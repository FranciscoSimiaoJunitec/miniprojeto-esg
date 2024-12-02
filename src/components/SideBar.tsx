import React, { useState } from 'react';
import SlideInAnimation from './animations/MapSlide';
import InstitutionBoard from './InstitutionBoard';
import allInstitutions from '../assets/allInstitutions.json';

type SideBarProps = {
  region: any | null;
  onClose: () => void;
  onClearRegion: () => void;
  showAll: boolean;
  setShowAll: (value: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ region, onClose, onClearRegion, showAll, setShowAll}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filters = ['---', 'Social', 'Cultural', 'Ambiental', 'Animal'];

  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
    onClearRegion();
  };

  return (
    <SlideInAnimation
      direction="left"
      className="absolute top-0 left-0 h-full w-1/2 bg-white text-black p-6 shadow-lg z-40"
    >
      <button
        onClick={onClose}
        className="absolute top-1/2 transform translate-x-8 right-0 text-gray-600 text-4xl bg-white bg-opacity-30 hover:text-gray-700 px-2 py-6 z-10"
        style={{
          clipPath: 'polygon(0% 0%, 100% 20%, 100% 80%, 0% 100%)',
        }}
      >
        &times;
      </button>
      <div className="mt-12">
        <div className='flex flex-row justify-between pr-12'>
          <h1 className="text-4xl font-bold mb-4">{showAll ? "Portugal" : region.properties.name.toUpperCase()}</h1>
          {!showAll &&
            <p
              className="pt-4 hover:underline cursor-pointer"
              onClick={handleShowAll}
            >
              VER TODOS
            </p>
          } 
        </div>
        <div className="w-11/12 h-0.5 bg-gray-300 mb-4"></div>
        <p className="mt-4">
          Clica numa associação para veres mais detalhes
        </p>
        <div className="flex items-center mt-10">
          {/* Dropdown Menu */}
          <div className="relative flex flex-row gap-8">
            {/* Header */}
            <h3 className="ml-4 mt-2">Filtrar por:</h3>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              {selectedFilter || '---'}
            </button>
            {isDropdownOpen && (
              <ul className="absolute mt-12 left-32 w-full bg-white border border-gray-300 rounded shadow-lg">
                {filters.map((filter) => (
                  <li
                    key={filter}
                    onClick={() => handleSelectFilter(filter)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {filter}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <InstitutionBoard
          institutions={showAll ? allInstitutions : region.institutions}
          filter={selectedFilter}
        />
      </div>
    </SlideInAnimation>
  );
};

export default SideBar;

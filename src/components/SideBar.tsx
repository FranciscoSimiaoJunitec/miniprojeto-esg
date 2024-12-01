import React from 'react';
import SlideInAnimation from './animations/MapSlide';

type SideBarProps = {
  region: string | null;
  onClose: () => void;
};

const SideBar: React.FC<SideBarProps> = ({ region, onClose }) => {
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
        <h2 className="text-3xl font-bold mb-4">Selected Region</h2>
        <p className="text-lg">
            <strong>Region ID:</strong> {region}
        </p>
        <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Add more
            details about the selected region here.
        </p>
    </SlideInAnimation>
  );
};

export default SideBar;

import React, { useState } from 'react';
import { useViewport } from 'react-viewport-hooks';
import './Header.css'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { vw } = useViewport();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobile = vw < 768; // Example breakpoint for mobile

  return (
    <header className="bg-[#0944A1] text-white flex items-center justify-between py-6 px-8 z-50 relative">
      <div className="container flex items-center justify-stretch">
        <img src={`${process.env.PUBLIC_URL}/logoJunitec.svg`} alt="logo" className="h-16 pr-20" />
        {isMobile ? (
          <>
            <button className="block md:hidden absolute right-8" onClick={toggleMenu}>
              { isOpen ? 
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                :
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              }
             
            </button>
            <nav className={`mr-[-2rem] ml-[-2rem] pb-[10px] absolute top-full left-0 right-0 bg-[#0944A1] ${isOpen ? 'flex' : 'hidden'} flex-col items-center`} >
              <ul className="flex flex-col items-center gap-4 text-xl font-semibold">
                <li><a href="#map-section" className="hover-effect">Como Ajudar</a></li>
                <li><a href="https://junitec.pt/home/" target="_blank" rel="noopener noreferrer" className="hover-effect">Conhece-nos</a></li>
                <li><a href="https://junitec.pt/contactos/" target="_blank" rel="noopener noreferrer" className="hover-effect">Contactos</a></li>
              </ul>
            </nav>
          </>
        ) : (
          
          <div className="flex flex-row justify-evenly text-xl font-semibold w-full">
            <a href="#map-section" className="hover-effect">Como Ajudar</a>
            <a href="https://junitec.pt/home/" target="_blank" rel="noopener noreferrer" className="hover-effect">Conhece-nos</a>
            <a href="https://junitec.pt/contactos/" target="_blank" rel="noopener noreferrer" className="hover-effect">Contactos</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

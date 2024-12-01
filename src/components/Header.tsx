import React, { useState } from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0944A1] text-white flex items-center justify-between py-6 px-8">
      <div className="container mx-auto flex items-center justify-between">
        <img src={`${process.env.PUBLIC_URL}/prancheta.svg`} alt="logo" className="h-8" />
        <button className="block md:hidden" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <nav className={`flex-1 ${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-center`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-48 text-xl font-semibold">
            <li><a href="#map-section" className="hover-effect">Como Ajudar</a></li>
            <li><a href="https://junitec.pt/home/" className="hover-effect">Conhece-nos</a></li>
            <li><a href="#contacts" className="hover-effect">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

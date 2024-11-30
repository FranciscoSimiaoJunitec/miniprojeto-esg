import React from 'react';
import './Header.css'; 

const Header: React.FC = () => {
  return (
    <header className="bg-[#0944A1] text-white flex items-center justify-center py-6 px-8">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <img src="/prancheta.svg" alt="logo" />
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-48 text-xl font-semibold">
            <li><a href="#help" className="hover-effect">Como Ajudar</a></li>
            <li><a href="#about" className="hover-effect">Conhece-nos</a></li>
            <li><a href="#contacts" className="hover-effect">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

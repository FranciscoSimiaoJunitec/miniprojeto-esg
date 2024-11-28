import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0944A1] text-white flex items-center justify-center py-6 px-8">
      <div className="container mx-auto flex items-center justify-between max-w-6xl">
        <div className="text-3xl font-bold">Junitec</div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-48 text-xl font-semibold">
            <li><a href="#help" className="hover:underline">Como Ajudar</a></li>
            <li><a href="#about" className="hover:underline">Conhece-nos</a></li>
            <li><a href="#contacts" className="hover:underline">Contactos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

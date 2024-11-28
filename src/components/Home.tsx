import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white text-center"
      style={{
        background: 'linear-gradient(180deg, #003399 0%, #0057b7 100%)', 
      }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Neste Natal</h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-4">
        Junta-te à <span className="text-white">JUNITEC</span>.
      </h2>
      <h3 className="text-2xl md:text-4xl font-bold">
        Faz a Diferença.
      </h3>
      <div className="mt-8">

        <div className="w-8 h-8 border-4 border-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default HeroSection;

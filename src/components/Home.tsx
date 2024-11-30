import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col py-36 px-16 relative">
      {/* Layer 1: Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.svg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Layer 2: Blue Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/blur.svg"
          alt="Blur"
          className="object-cover w-full h-full"
          style={{ filter: 'blur(1px)' }} 
        />
      </div>
      <div className='text-start z-20 text-white '>
        <h1 className="text-3xl md:text-5xl mb-2">NESTE NATAL</h1>
        <h2 className="text-3xl md:text-5xl mb-6">
          JUNTA-TE À <span className="font-700">JUNITEC</span>.
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold">
          FAZ A DIFERENÇA.
        </h3>
      </div>
      <div className='mt-56 z-20 flex justify-center'>
        <div className="w-7 h-12 border-2 border-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white border-4 border-white rounded-full animate-grow-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

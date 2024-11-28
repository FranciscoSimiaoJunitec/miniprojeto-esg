import React from 'react';

const Commitment: React.FC = () => {
  const videoId = 'dQw4w9WgXcQ';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="py-16 px-8 md:px-16 flex justify-center items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <blockquote className="italic text-lg md:text-xl text-center mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <span className="block mt-4 font-semibold">Carlos Rebelo, Presidente da JUNITEC</span>
          </blockquote>
          <div className="mx-auto max-w-xl bg-blue-600 text-white p-8 shadow-lg aspect-square flex flex-col justify-start">
            <h2 className="text-3xl font-bold mb-8 text-center">O Nosso Compromisso</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 aspect-video bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src={embedUrl}
            title="YouTube video player"
          
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Commitment;

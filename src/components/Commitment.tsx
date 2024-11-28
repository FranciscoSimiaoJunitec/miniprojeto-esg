import React from 'react';

const Commitment: React.FC = () => {
  const videoId = 'dQw4w9WgXcQ';
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="pt-16 pb-32 px-8 md:px-16 flex flex-col justify-center items-center">
      <div className="w-full">
          <blockquote className="italic text-lg md:text-3xl text-center mb-8">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <span className="block mt-4 text-lg md:text-xl font-light text-end">Carlos Rebelo, Presidente da JUNITEC</span>
          </blockquote>
        </div>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center">
        
      <div className="relative -z-10 md:w-4/5 mx-auto max-w-xl bg-[#175FAAED] text-white p-8 shadow-lg flex flex-col justify-start">
        <h2 className="text-3xl font-bold mb-8 text-start">O NOSSO COMPROMISSO</h2>
        <p className="text-2xl text-justify pr-24">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
        
      <div className="absolute md:static top-0 right-0 md:w-3/5 aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg md:translate-y-20 md:-translate-x-16">
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

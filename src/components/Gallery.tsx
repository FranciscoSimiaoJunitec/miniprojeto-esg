import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Gallery.css';

const Gallery: React.FC = () => {
  const images = [
    `${process.env.PUBLIC_URL}/1.png`,
    `${process.env.PUBLIC_URL}/2.png`,
    `${process.env.PUBLIC_URL}/3.png`,
    `${process.env.PUBLIC_URL}/4.png`,
    `${process.env.PUBLIC_URL}/5.png`,
    `${process.env.PUBLIC_URL}/6.png`,
    `${process.env.PUBLIC_URL}/7.png`,
    `${process.env.PUBLIC_URL}/8.png`,
    `${process.env.PUBLIC_URL}/9.png`,
    `${process.env.PUBLIC_URL}/10.png`,
    `${process.env.PUBLIC_URL}/11.png`,
    `${process.env.PUBLIC_URL}/12.png`,
    `${process.env.PUBLIC_URL}/13.png`,
    `${process.env.PUBLIC_URL}/14.png`,
    `${process.env.PUBLIC_URL}/15.png`,
    `${process.env.PUBLIC_URL}/16.png`,
    `${process.env.PUBLIC_URL}/17.png`,
    `${process.env.PUBLIC_URL}/18.png`,
    `${process.env.PUBLIC_URL}/19.png`,
    `${process.env.PUBLIC_URL}/20.png`,
    `${process.env.PUBLIC_URL}/21.png`,
    `${process.env.PUBLIC_URL}/22.png`,
    `${process.env.PUBLIC_URL}/23.png`,
    `${process.env.PUBLIC_URL}/24.png`,
  ];

  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="gallery-container bg-[#3e7ab9]">
      <Carousel 
        responsive={responsive} 
        infinite 
        autoPlay 
        autoPlaySpeed={3000} 
        keyBoardControl 
        showDots
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;

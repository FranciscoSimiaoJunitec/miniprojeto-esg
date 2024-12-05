import React, { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Gallery.css';

const Gallery: React.FC = () => {
  const images = [
    'https://i.ibb.co/7p7pkSS/Prancheta-18.png',
    'https://i.ibb.co/nQGT7sJ/Prancheta-20-1.png',
    'https://i.ibb.co/7KGWBm6/Prancheta-20.png',
    'https://i.ibb.co/NNqFRQ7/Prancheta-21.png',
    'https://i.ibb.co/tmcWY9j/Prancheta-22.png',
    'https://i.ibb.co/qk2D83g/Prancheta-24.png',
    'https://i.ibb.co/y8q8TzV/Prancheta-25.png',
    'https://i.ibb.co/6RqWV6j/Prancheta-26.png',
    'https://i.ibb.co/93Xm0YJ/Prancheta-28-1.png',
    'https://i.ibb.co/4F2ZS3Q/Prancheta-28.png',
    'https://i.ibb.co/PDZ1r7f/Prancheta-29.png',
    'https://i.ibb.co/LrVsC8B/Prancheta-30.png',
    'https://i.ibb.co/198Z0r8/Prancheta-31.png',
    'https://i.ibb.co/rkp3jwt/Prancheta-32.png',
    'https://i.ibb.co/0qVVNTr/Prancheta-33.png',
    'https://i.ibb.co/6wQZ5kM/Prancheta-35-1.png',
    'https://i.ibb.co/F66jWW9/Prancheta-35.png',
    'https://i.ibb.co/t2v1cZ1/Prancheta-36.png',
    'https://i.ibb.co/SsFDPBd/Prancheta-37.png',
    'https://i.ibb.co/pQzshC6/Prancheta-39.png',
    'https://i.ibb.co/QQDW2bL/Prancheta-40.png',
    'https://i.ibb.co/rd39yjZ/Prancheta-41.png',
    'https://i.ibb.co/J2XzD8Z/Prancheta-43.png',
    'https://i.ibb.co/Z2w5Hpb/Prancheta-44.png',
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

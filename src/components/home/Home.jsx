import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  const images = [
    'https://via.placeholder.com/800x400?text=Image+1',
    'https://via.placeholder.com/800x400?text=Image+2',
    'https://via.placeholder.com/800x400?text=Image+3',
  ];

  const settings = {
    dots: true, // Adds dots navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    autoplay: true, // Auto play enabled
    autoplaySpeed: 3000, // Auto play speed in milliseconds
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;

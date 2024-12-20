import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; 

function Home() {
  const images = [
    'https://quotefancy.com/media/wallpaper/3840x2160/2245689-Jonathan-Swift-Quote-The-best-doctors-in-the-world-are-Doctor-Diet.jpg',
    'https://i1.wp.com/www.uniquenewsonline.com/wp-content/uploads/2020/07/National-Doctors-Day-2020-Quotes-With-HD-Images-Thoughtful-Sayings.jpg?fit=1200%2C667&ssl=1&is-pending-load=1',
    'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2020/06/30/Pictures/_c1f2d8e2-baa7-11ea-b411-fb55c265b659.jpg'
    
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
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>  

    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import './Places.css';
import chitwan1 from './chitwan1.jpg';

const Chitwan = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const imagePaths = [
    chitwan1,
    'path/to/image2.jpg',
    'path/to/image3.jpg',
    'path/to/image4.jpg',
    'path/to/image5.jpg',
  ];

  const imageTexts = [
    'Chitwan National Park was founded in 1973. With a 932 sq/km size, the park is a recognized World Heritage site. The park features include a conservation area for vultures and gharials and an elephant breeding facility. Many visitors to the park also travel to Sauraha to take advantage of the resorts nearby. Many other temples, including Lami Taal, Bikram Baba, and Tamor Taal, are also within the park’s boundaries. Other well-liked activities include going on an elephant ride and visiting the local forest. Finally, many seek to learn more about the way of life, culture, and dance of regional ethnic groups, including the Tharu, Bate, and Majhi.',
    'Text 2',
    'Text 3',
    'Text 4',
    'Text 5',
  ];

  const totalImages = imagePaths.length;

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="slider-button left" onClick={prevImage}>
          &lt;
        </button>
        <img src={imagePaths[currentImage]} alt={imageTexts[currentImage]} />
        <button className="slider-button right" onClick={nextImage}>
          &gt;
        </button>
      </div>
      <div className="text-container">
        <div className="text">{imageTexts[currentImage]}</div>
      </div>
    </div>
  );
};

export default Chitwan;

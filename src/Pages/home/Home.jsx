import React, { useState } from 'react';
import './Home.css';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
     'https://static.zara.net/photos///2023/I/0/2/p/4302/613/501/2/w/1920/4302613501_6_1_1.jpg?ts=1701247950442',
'     https://static.zara.net/photos///2023/I/0/2/p/8574/605/400/2/w/1920/8574605400_6_1_1.jpg?ts=1698131747961',
'https://static.zara.net/photos///2023/I/0/2/p/6864/752/707/2/w/1920/6864752707_6_1_1.jpg?ts=1698314982585'
  ];

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='div'>
      <h1 className='h1'>Best Quality   
      {/* <br /> &nbsp; &nbsp; */}
      &nbsp;&&nbsp;Best Prices</h1>

      <div className="image-slider">
        <IconButton className="arrow-button" onClick={handlePrevImage}>
          <ArrowBackIcon />
        </IconButton>

        <img className='image' 
                  style={{ maxHeight: '400px', objectFit: 'cover' }}

        src={images[currentImageIndex]} alt="" />

        <IconButton className="arrow-button" onClick={handleNextImage}>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}

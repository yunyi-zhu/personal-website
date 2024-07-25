import React, { useState } from 'react';
import pigeonImage1 from './sprites/pigeon1.png'; 
import pigeonImage2 from './sprites/pigeon2.png'; 
import pigeonImage3 from './sprites/pigeon3.png'; 
import pigeonImage4 from './sprites/pigeon4.png'; 
import GrassImage1 from './sprites/grass1.png';
import GrassImage2 from './sprites/grass2.png';
import SpiderLily from './sprites/spiderlily1.png';

const Images = [
    pigeonImage1,
    pigeonImage2,
    pigeonImage3,
    pigeonImage4,
    // GrassImage1,
    // GrassImage2,
    // SpiderLily
  ];


const PigeonClick = () => {
  const [pigeons, setPigeons] = useState([]);

  const handleClick = (e) => {
    // Get the click or touch coordinates
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    // Add a new pigeon with a unique key
    const randomPigeon = Images[Math.floor(Math.random() * Images.length)];

    // Add a new pigeon with a unique key and random image
    setPigeons((prevPigeons) => [
      ...prevPigeons,
      { id: Date.now(), x, y, image: randomPigeon }
    ]);

    // Remove the pigeon after 3 seconds
    setTimeout(() => {
      setPigeons((prevPigeons) =>
        prevPigeons.filter((pigeon) => pigeon.id !== Date.now())
      );
    }, 3000);
  };

  return (
    <div
      onClick={handleClick}
      onTouchStart={handleClick}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    >
      {pigeons.map((pigeon) => (
        <img
          key={pigeon.id}
          src={pigeon.image}
          alt="Pigeon"
          style={{
            position: 'absolute',
            left: pigeon.x - 25 + 'px',
            top: pigeon.y - 25 + 'px', 
            width: '75px',
            height: '75px',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default PigeonClick;
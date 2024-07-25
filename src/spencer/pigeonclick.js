import React, { useState } from 'react';
import pigeonImage from './pigeon.png'; 

const PigeonClick = () => {
  const [pigeons, setPigeons] = useState([]);

  const handleClick = (e) => {
    // Get the click or touch coordinates
    const x = e.clientX || e.touches[0].clientX;
    const y = e.clientY || e.touches[0].clientY;

    // Add a new pigeon with a unique key
    setPigeons((prevPigeons) => [
      ...prevPigeons,
      { id: Date.now(), x, y }
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
          src={pigeonImage}
          alt="Pigeon"
          style={{
            position: 'absolute',
            left: pigeon.x - 25 + 'px',
            top: pigeon.y - 25 + 'px', 
            width: '50px',
            height: '50px',
            pointerEvents: 'none',
          }}
        />
      ))}
    </div>
  );
};

export default PigeonClick;
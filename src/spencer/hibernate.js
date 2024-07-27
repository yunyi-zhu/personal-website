import React, { useState } from 'react';
import restingSeal from './sprites/seal-sleeping.jpg';
import upSeal from './sprites/seal-up.jpg';
import catImage from './sprites/cat.png';
import './css/styles.css';

const HibernationPage = () => {
  const [isResting, setIsResting] = useState(false);
  const [cats, setCats] = useState([]);

  const toggleRest = () => {
    setIsResting(!isResting);
  };

  const handleClick = (e) => {
    if (!e.target.classList.contains('rest-button')) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCats([...cats, { x, y }]);
    }
  };

  return (
    <div className={`hibernation-page ${isResting ? 'resting' : ''}`} onClick={handleClick}>
      <div className="seal-status">
        {isResting ? (
          <div>
            <p className="seal-text">Taking a rest~</p>
            <img src={restingSeal} alt="Seal resting" className="seal-image" />
          </div>
        ) : (
          <div>
            <p className="seal-text">Up and running!</p>
            <img src={upSeal} alt="Seal up" className="seal-image" />
          </div>
        )}
      </div>
      <button onClick={toggleRest} className="rest-button">
        {isResting ? 'Wake up' : 'Take a rest'}
      </button>
      {cats.map((cat, index) => (
        <div key={index} className="cat" style={{ top: cat.y, left: cat.x }}></div>
      ))}
    </div>
  );
};

export default HibernationPage;
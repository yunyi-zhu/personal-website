import React, { useState } from 'react';
import restingSeal from './sprites/seal-sleeping.jpg';
import upSeal from './sprites/seal-up.jpg';
import './css/styles.css';

const HibernationPage = () => {
  const [isResting, setIsResting] = useState(false);

  const toggleRest = () => {
    setIsResting(!isResting);
  };

  return (
    <div className={`hibernation-page ${isResting ? 'resting' : ''}`}>
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
    </div>
  );
};

export default HibernationPage;
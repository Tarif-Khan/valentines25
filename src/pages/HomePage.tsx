import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import '../styles/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  const handleYes = () => {
    navigate('/pokemon-card');
  };

  const handleNo = () => {
    setShowError(true);
    setTimeout(() => setShowError(false), 2000);
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <Heart className="heart-icon" />
        <h1 className="title">
          Sonia, will you be my valentine?
        </h1>
        
        <div className="button-container">
          <button
            onClick={handleYes}
            className="button button-yes"
          >
            Yes
          </button>
          <button
            onClick={handleNo}
            className="button button-no"
          >
            No
          </button>
        </div>

        {showError && (
          <div className="error-message">
            Wrong Option! Try again 💝
          </div>
        )}
      </div>
      
      <div className="gradient-bottom">
        <div className="gradient-overlay" />
      </div>
    </div>
  );
};

export default HomePage;
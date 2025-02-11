import React from 'react';
import { GamepadIcon, HomeIcon, MailIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/PokemonCard.css';

const PokemonCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card-container">
            <div className="navigation-icons">
        <HomeIcon 
          className="nav-icon"
          onClick={() => navigate('/')}
        />
        <MailIcon 
          className="nav-icon"
          onClick={() => navigate('/love-letter')}
        />
        </div>
      <div className="pokemon-card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">The Valentine's</h2>
            <span>2025 ❤️</span>
          </div>
          
          <div>
            <img
              src= './card.jpg' 
              className="card-image"
            />
          </div>
          
          <div className="move-section">
            <div className="move-header">
              <span>❤️❤️❤️❤️</span>
              <span className="move-name">I Choose You!</span>
              <span className="move-pp">500 PP</span>
            </div>
            
            <p className="move-description">
              "Sonia, I love you more than anything. Thank you for being a part of my life. Will you be my Valentine this year, and every year after?"
            </p>
          </div>

          <div className="card-footer">
            <GamepadIcon className="w-6 h-6" />
            <span>❤️</span>
            <GamepadIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
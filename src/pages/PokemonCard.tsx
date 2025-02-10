import React from 'react';
import { GamepadIcon } from 'lucide-react';
import '../styles/PokemonCard.css';

const PokemonCard = () => {
  return (
    <div className="card-container">
      <div className="pokemon-card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">The Valentine's</h2>
            <span>2025 ❤️</span>
          </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=500&auto=format&fit=crop&q=60"
              alt="Valentine"
              className="card-image"
            />
          </div>
          
          <div className="move-section">
            <div className="move-header">
              <span>❤️❤️❤️❤️</span>
              <span className="move-name">I Choose You!</span>
              <span className="move-pp">50 PP</span>
            </div>
            
            <p className="move-description">
              "I love you more than anything. Thank you for being a part of my life. Will you be my Valentine this year, and every year after?"
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
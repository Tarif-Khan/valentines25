import React from 'react';
import { GamepadIcon } from 'lucide-react';
import '../styles/PokemonCard.css';

const PokemonCard = () => {
  return (
    <div className="card-container">
      <div className="pokemon-card">
        <div className="card-content">
          <div className="card-header">
            <h2 className="card-title">The Valentine 2025</h2>
            <span>❤️</span>
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
              <span className="move-name">I Love You</span>
              <span className="move-pp">50 PP</span>
            </div>
            
            <p className="move-description">
              "Tarif professes his love for you whenever this move is used. Thank you for being a part of my life."
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
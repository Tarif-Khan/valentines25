import React from 'react';
import { Heart } from 'lucide-react';

const PokemonCard = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="w-96 bg-gradient-to-br from-pink-300 to-pink-400 rounded-xl p-4 transform hover:scale-105 transition-transform duration-300 shadow-xl">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">The Valentine 2025</h2>
            <span className="text-pink-600 font-bold">❤️</span>
          </div>
          
          <div className="mb-6">
            <img
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=60"
              alt="Valentine"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              <span className="font-bold text-lg">I Love You</span>
              <span className="ml-auto text-gray-600">50 PP</span>
            </div>
            
            <p className="text-gray-700 italic">
              "Tarif professes his love for you whenever this move is used. Thank you for being a part of my life."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
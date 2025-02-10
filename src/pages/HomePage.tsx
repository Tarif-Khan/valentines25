import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';

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
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <Heart className="w-20 h-20 text-pink-500 mx-auto mb-8 animate-pulse" />
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8">
          Sonia, will you be my valentine?
        </h1>
        
        <div className="space-x-4">
          <button
            onClick={handleYes}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-105"
          >
            Yes
          </button>
          <button
            onClick={handleNo}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-full transform transition hover:scale-105"
          >
            No
          </button>
        </div>

        {showError && (
          <div className="mt-4 text-red-500 font-bold animate-bounce">
            Wrong Option! Try again 💝
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-32 bg-gradient-to-t from-pink-200 to-transparent" />
      </div>
    </div>
  );
};

export default HomePage;
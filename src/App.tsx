import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonCard from './pages/PokemonCard';
import LoveLetter from './pages/LoveLetter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/valentines25/" element={<HomePage />} />
        <Route path="/pokemon-card" element={<PokemonCard />} />
        <Route path="/love-letter" element={<LoveLetter />} />
      </Routes>
    </Router>
  );
}

export default App
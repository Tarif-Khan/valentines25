import React from 'react';
import HomePage from './pages/HomePage';
import PokemonCard from './pages/PokemonCard';
import LoveLetter from './pages/LoveLetter';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-card" element={<PokemonCard />} />
        <Route path="/love-letter" element={<LoveLetter />} />
      </Routes>
    </Router>
  );
}
export default App
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PokemonCard from './pages/PokemonCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-card" element={<PokemonCard />} />
      </Routes>
    </Router>
  );
}

export default App;
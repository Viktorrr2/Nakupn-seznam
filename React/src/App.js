
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Nakupsez from './Nakupsez';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nakupsez" element={<Nakupsez />} />
      </Routes>
    </Router>
  );
}

export default App;

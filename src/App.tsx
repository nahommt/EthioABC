import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import FlipGamePage from "./Pages/FlipGamePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruten til landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruten til vendespillet */}
        <Route path="/flip-game" element={<FlipGamePage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LevelSelector from "./LevelSelector";
import GamePage from "./GamePage";
import ResultPage from "./ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LevelSelector />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;

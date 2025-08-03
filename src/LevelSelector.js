import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./LevelSelector.css";

const LevelSelector = () => {
  const [selectedLevel, setSelectedLevel] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const handleStart = () => {
    if (selectedLevel) {
      // Pass selectedLevel as state to the next page
      navigate("/game", { state: { level: selectedLevel } });
    } else {
      alert("Please select a level first.");
    }
  };

  return (
    <div className="selector-container">
      <label htmlFor="level">Choose a level:</label>
      <select id="level" value={selectedLevel} onChange={handleChange}>
        <option value="">Select Level</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <button onClick={handleStart}>Start Game</button>

      {selectedLevel && (
        <p className="selected-info">Selected Level: {selectedLevel}</p>
      )}
    </div>
  );
};

export default LevelSelector;

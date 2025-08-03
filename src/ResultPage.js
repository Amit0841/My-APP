import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { level, guess, randomNumber, guessCount } = location.state || {};

  if (!level || !guess || !randomNumber) {
    return (
      <div style={{ padding: 40, textAlign: "center" }}>
        <h2>No result data found!</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h1>Game Result</h1>
      <p>
        Level: <strong>{level}</strong>
      </p>
      <p>
        Your Guess: <strong>{guess}</strong>
      </p>
      <p>
        Correct Number: <strong>{randomNumber}</strong>
      </p>
      <p>
        Total Guesses: <strong>{guessCount}</strong>
      </p>
      <h2>{guess === randomNumber ? "🎉 You Won!" : "Try Again!"}</h2>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
};

export default ResultPage;

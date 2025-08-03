import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./GamePage.css";

const GamePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const level = location.state?.level || "Unknown";

  const [message, setMessage] = useState("");
  const [guess, setGuess] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);
  const [result, setResult] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessCount, setGuessCount] = useState(0); // counts guesses

  useEffect(() => {
    let max = 0;
    if (level === "Easy") {
      max = 100;
      setMessage("Guess the number between 1 to 100");
    } else if (level === "Medium") {
      max = 1000;
      setMessage("Guess the number between 1 to 1000");
    } else if (level === "Hard") {
      max = 10000;
      setMessage("Guess the number between 1 to 10000");
    } else {
      setMessage("Unknown difficulty");
    }

    if (max > 0) {
      const rand = Math.floor(Math.random() * max) + 1;
      setRandomNumber(rand);
      setResult("");
      setGuess("");
      setIsCorrect(false);
      setGuessCount(0); // reset guess count on new game
    }
  }, [level]);

  const handleCheck = () => {
    if (!isCorrect) {
      const numGuess = Number(guess);
      if (!numGuess || numGuess < 1) {
        setResult("Please enter a valid positive number.");
        return;
      }

      setGuessCount((prev) => prev + 1); // increment guess count

      if (numGuess === randomNumber) {
        setResult("🎉 Congrats! You guessed it right!");
        setIsCorrect(true);
      } else if (numGuess < randomNumber) {
        setResult("Try a higher number.");
      } else {
        setResult("Try a lower number.");
      }
    } else {
      // Navigate to result page, send guessCount as well
      navigate("/result", {
        state: { level, guess, randomNumber, guessCount },
      });
    }
  };

  return (
    <div className="game-container">
      <h1>{message}</h1>
      <p>
        You selected: <strong>{level}</strong> level
      </p>

      <input
        type="number"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={isCorrect}
      />
      <button onClick={handleCheck}>{isCorrect ? "Result" : "Check"}</button>

      {result && <p className="result">{result}</p>}

      {!isCorrect && (
        <p style={{ marginTop: "10px" }}>Guess Count: {guessCount}</p>
      )}
    </div>
  );
};

export default GamePage;

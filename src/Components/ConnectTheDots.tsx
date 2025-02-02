import React, { useState, useEffect } from "react";
import lettersData from "../assets/ethiopic-letters.json";

interface LetterPair {
  id: number;
  letter: string;
  pronunciation: string;
}

export default function ConnectTheDots() {
  const [pairs, setPairs] = useState<LetterPair[]>([]);
  const [shuffledPronunciations, setShuffledPronunciations] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  // Hent 5 tilfældige bogstaver og bland udtalerne
  useEffect(() => {
    resetGame();
  }, []);

  // Hent 5 tilfældige par og bland udtalerne
  const resetGame = () => {
    const randomPairs = getRandomPairs(lettersData, 5);
    setPairs(randomPairs);
    setShuffledPronunciations(shuffleArray(randomPairs.map(pair => pair.pronunciation)));
  };

  // Funktion til at håndtere korrekt forbindelse
  const handleMatch = (letter: string, pronunciation: string) => {
    const correctPair = pairs.find(pair => pair.letter === letter && pair.pronunciation === pronunciation);
    if (correctPair) {
      alert("Korrekt forbindelse! 🎉");
      setScore(score + 1);

      // Udskift korrekt par med et nyt tilfældigt
      const remainingPairs = pairs.filter(pair => pair.id !== correctPair.id);
      const newPair = getRandomPairs(lettersData, 1)[0];

      setPairs([...remainingPairs, newPair]);
      setShuffledPronunciations(shuffleArray([...remainingPairs.map(p => p.pronunciation), newPair.pronunciation]));
    } else {
      alert("Forkert forbindelse 😞");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
      <div>
        <h2>Etiopiske Bogstaver</h2>
        {pairs.map(pair => (
          <div key={pair.id} style={{ marginBottom: "10px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "10px",
                border: "1px solid black",
                cursor: "pointer",
                width: "50px",
                textAlign: "center"
              }}
              onClick={() => {
                const userInput = prompt(`Hvilken udtale matcher ${pair.letter}?`) || '';
                handleMatch(pair.letter, userInput);
              }}
            >
              {pair.letter}
            </span>
          </div>
        ))}
      </div>

      <div>
        <h2>Latinske Udtaler</h2>
        {shuffledPronunciations.map((pron, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <span
              style={{
                display: "inline-block",
                padding: "10px",
                border: "1px solid black",
                width: "100px",
                textAlign: "center"
              }}
            >
              {pron}
            </span>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: 0, right: 0, padding: "10px" }}>
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
}

// Hent tilfældige par
function getRandomPairs(array: LetterPair[], count: number): LetterPair[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Bland en array
function shuffleArray(array: string[]): string[] {
  return [...array].sort(() => Math.random() - 0.5);
}

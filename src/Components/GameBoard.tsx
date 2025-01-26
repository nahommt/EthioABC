import React, { useState, useEffect } from "react";
import Card from "./Card";
import lettersData from "../assets/ethiopic-letters.json";

interface Letter {
  id: number;
  letter: string;
  pronunciation: string;
}

export default function GameBoard() {
  const [letters, setLetters] = useState<Letter[]>([]);

  useEffect(() => {
    setLetters(lettersData);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {letters.map((item) => (
        <Card key={item.id} letter={item.letter} pronunciation={item.pronunciation} />
      ))}
    </div>
  );
}

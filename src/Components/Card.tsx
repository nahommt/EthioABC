import { useState } from "react";

interface CardProps {
  letter: string;
  pronunciation: string;
}

export default function Card({ letter, pronunciation }: CardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-inner">
        <div className="card-front">
          {letter}
        </div>
        <div className="card-back">
          {pronunciation}
        </div>
      </div>
    </div>
  );
}

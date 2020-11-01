import React from "react";

export default function Score({ score }) {
  return (
    <div>
      <p className="gameOver">Game over!</p>
      <p className="score">
        You Scored <br /> {score}/10
      </p>
    </div>
  );
}

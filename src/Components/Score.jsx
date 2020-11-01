import React from "react";

export default function Score({ score, restartGame }) {
  return (
    <div>
      <p className="gameOver">Game over!</p>
      <p className="score">
        You Scored <br /> {score}/10
      </p>
      <button onClick={() => restartGame()}>Restart</button>
    </div>
  );
}

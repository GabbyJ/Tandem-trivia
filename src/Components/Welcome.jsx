import React from "react";

export default function Welcome({ startGame }) {
  return (
    <div className="welcome">
      <p>Welcome to Tandem Trivia!</p>
      <button className="start" onClick={() => startGame()}>
        Start
      </button>
    </div>
  );
}

import React from "react";

export default function Score({ score, restartGame }) {
  return (
    <div>
      <p className="gameOver">Game over!</p>
      {score === 0 ? (
        <div>
          <p className="scoreZero">You Scored 0/10 😕<br/><br/>
          You have some work to do. Want to try again?</p>
        </div>
      ) : (
        <div>
          <p className="score">
          You Scored <br /> {score}/10
          </p>
      </div>
        
      )}
      
      <button className="restart" onClick={() => restartGame()}>Restart</button>
    </div>
  );
}

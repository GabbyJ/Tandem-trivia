import React from "react";

export default function Questionnaire({
  handleAnswer,
  data: { question, correct, incorrect }
}) {
  const shuffledAnswers = [correct, ...incorrect].sort(
    () => Math.random() - 0.5
  );

  return (
    <section className="trivia">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="answers">
        {shuffledAnswers.map((answer) => (
          <button
            key={Math.random(20)} //update later for proper keys (just removing console warning for now)
            className={correct === answer ? "right" : ""} //remove so answer isn't shown
            onClick={() => handleAnswer(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </section>
  );
}

import React from "react";

export default function Questionnaire({
  showAnswers,
  handleAnswer,
  handelNextQuestion,
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
        {shuffledAnswers.map((answer) => {
          const textColor = showAnswers
            ? answer === correct
              ? "right"
              : "wrong"
            : "";
          return (
            <button
              key={Math.random(20)} //update later for proper keys (just removing console warning for now)
              className={`${textColor}`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
      {showAnswers && (
        <button onClick={handelNextQuestion} className="next">
          Next Question
        </button>
      )}
    </section>
  );
}

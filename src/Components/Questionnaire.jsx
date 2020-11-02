import React from "react";

export default function Questionnaire({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  currentIndex,
  data: { question, correct, answers },
}) {
  return (
    <section className="trivia">
      <p className="questionCount">{currentIndex + 1}/10</p>
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="answers">
        {answers.map((answer, idx) => {
          const textColor = showAnswers
            ? answer === correct
              ? "right"
              : "wrong"
            : "";
          return (
            <button
              key={idx}
              className={`${textColor}`}
              onClick={() => handleAnswer(answer)}
            >
              {answer}
            </button>
          );
        })}
      </div>
      {showAnswers && (
        <button onClick={handleNextQuestion} className="next">
          Next Question
        </button>
      )}
    </section>
  );
}

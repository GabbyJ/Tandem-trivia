import React from "react";

export default function Questionnaire({
  showAnswers,
  handleAnswer,
  handelNextQuestion,
  data: { question, correct, answers }
}) {
  
  return (
    <section className="trivia">
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
        <button onClick={handelNextQuestion} className="next">
          Next Question
        </button>
      )}
    </section>
  );
}

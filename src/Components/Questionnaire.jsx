import React from "react";
import Button from "./Button";

export default function Questionnaire({
  handleAnswer,
  data: { question, correct, incorrect }
}) {
  const shuffledAnswer = [correct, ...incorrect].sort(
    () => Math.random() - 0.5
  );

  return (
    <section className="trivia">
      <div className="question">
        <p>{question}</p>
      </div>
      <div className="answers">
        <Button
          className={correct === shuffledAnswer[0] ? "right" : ""}
          onClick={() => handleAnswer(shuffledAnswer[0])}
          answer={shuffledAnswer[0]}
        />
        <Button
          className={correct === shuffledAnswer[1] ? "right" : ""}
          onClick={() => handleAnswer(shuffledAnswer[1])}
          answer={shuffledAnswer[1]}
        />
        <Button
          className={correct === shuffledAnswer[2] ? "right" : ""}
          onClick={() => handleAnswer(shuffledAnswer[2])}
          answer={shuffledAnswer[2]}
        />
        <Button
          className={correct === shuffledAnswer[3] ? "right" : ""}
          onClick={() => handleAnswer(shuffledAnswer[3])}
          answer={shuffledAnswer[3]}
        />
      </div>
    </section>
  );
}

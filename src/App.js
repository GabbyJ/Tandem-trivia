import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from "./Components/Questionnaire";
import Score from "./Components/Score";
import Welcome from "./Components/Welcome";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  function randomize() {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    fetch("/Apprentice_TandemFor400_Data.json")
      .then((res) => res.json())
      .then((data) => {
        const questions = data.trivia.map((question) => ({
          ...question,
          answers: [question.correct, ...question.incorrect].sort(randomize),
        }));

        setQuestions(questions.sort(randomize));
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      //prevent double guess
      if (answer === questions[currentIndex].correct) {
        setScore(score + 1);
      }
    }

    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);

    setCurrentIndex(currentIndex + 1);
  };

  const startGame = () => {
    setCurrentIndex(currentIndex + 0);
  };

  const restartGame = () => {
    setCurrentIndex(currentIndex - 10);
    setScore(score === 0);
    setQuestions(questions.sort(randomize));
  };

  return (
    <div>
      <Header />
      <div className="container">
        {currentIndex === null ? (
          <Welcome startGame={startGame} />
        ) : currentIndex >= 10 ? (
          <Score score={score} restartGame={restartGame} />
        ) : questions.length > 0 ? (
          <Questionnaire
            data={questions[currentIndex]}
            showAnswers={showAnswers}
            handleAnswer={handleAnswer}
            handleNextQuestion={handleNextQuestion}
            currentIndex={currentIndex}
          />
        ) : (
          <p>Loading Questions...</p>
        )}
      </div>
      <Footer />
      <span className="dot1"></span>
      <span className="dot2"></span>
    </div>
  );
}

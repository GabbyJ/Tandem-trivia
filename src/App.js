// TO DO, FIX, UPDATE
// 1. Randomize questions within the 10 of 20 but don't let repeat
// 2. Fix layout movement when "next Question" button pops up
// 3. Properly style Score display

import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from "./Components/Questionnaire";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch("/Apprentice_TandemFor400_Data.json")
      .then((res) => res.json())
      .then((data) => {
        //stop answers from re-rendering after click
        const questions = data.trivia.map((question) => //.trivia changes on json name
        ({
          ...question,
          answers: [
            question.correct,
            ...question.incorrect,
          ].sort(() => Math.random() - 0.5),
        }))

        setQuestions(questions);
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

  const handelNextQuestion = () => {
    setShowAnswers(false);

    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="container">
      <Header />
      {currentIndex >= 10 ? (
        <h2>Game over! Your score is {score}</h2>
      ) : questions.length > 0 ? (
        <Questionnaire
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
          handelNextQuestion={handelNextQuestion}
        />
      ) : (
        <p>Loading Questions...</p>
      )}

      <Footer />
    </div>
  );
}

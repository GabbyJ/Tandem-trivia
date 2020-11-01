// TO DO, FIX, UPDATE
// 1. Randomize questions within the 10 of 20 but don't let repeat
// 2. Update button key prop
// 3. Stop answer order from changing after click
// 4. Fix layout movement when "next Question" button pops up

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
        setQuestions(data.trivia); //.trivia changes on json name
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

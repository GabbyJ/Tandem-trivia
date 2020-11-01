// TO DO, FIX, UPDATE
// 1. Randomize questions within the 10 of 20 but don't let repeat
//2. Remove color from right answer
//2a. Show color after guess
//3. Update button key prop

import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from "./Components/Questionnaire";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("/Apprentice_TandemFor400_Data.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.trivia); //.trivia changes on json name
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct) {
      //increase the score if correct
      setScore(score + 1);
    }
  };

  return (
    <div className="container">
      <Header />
      {currentIndex >= 10 ? (
        <h2>Game over! Your score is {score}</h2>
      ) : questions.length > 0 ? (
        <Questionnaire
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (
        <p>Loading Questions...</p>
      )}

      <Footer />
    </div>
  );
}

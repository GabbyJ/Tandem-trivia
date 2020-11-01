import React, { useState, useEffect } from "react";
//import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from "./Components/Questionnaire";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/Apprentice_TandemFor400_Data.json")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.trivia); //.trivia changes on json name
      });
  }, []);

  const handleAnswer = (answer) => {
    setCurrentIndex(currentIndex + 1);
    // check for the answer

    // show another question

    //change score if correct
  };

  return (
    <div className="container">
      <Header />

      {questions.length > 0 ? (
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

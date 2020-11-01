import React, { useState, useEffect } from "react";
//import "./styles.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from "./Components/Questionnaire";

export default function App() {
  const [questions, SetQuestions] = useState([]);

  useEffect(() => {
    fetch("/Apprentice_TandemFor400_Data.json")
      .then((res) => res.json())
      .then((data) => {
        SetQuestions(data.trivia); //.data changes on json name
      });
  }, []);

  const handleAnswer = (answer) => {
    //check for the answer
  };

  return (
    <div className="container">
      <Header />

      {questions.length > 0 ? (
        <Questionnaire data={questions[0]} handleAnswer={handleAnswer} />
      ) : (
        <p>Loading Questions...</p>
      )}

      <Footer />
    </div>
  );
}

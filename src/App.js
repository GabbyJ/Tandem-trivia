import React, {useState, useEffect} from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from './Components/Questionnaire';

const TRIVIA = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(TRIVIA)
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results);
    });
  }, []);

  const handleAnswer = (answer) => {
    // check for the answer
  }
  

  return (
    <div className="container">
      <Header/>
      {questions.length > 0 ? (
        <Questionnaire data={questions[0]} handleAnswer={handleAnswer}/>
      ) : ( 
        <p className="loading">Loading Questions...</p>
        )
      }
      
      <Footer/>
    </div>
  );
}

export default App;
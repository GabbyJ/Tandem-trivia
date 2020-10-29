import React, {useState, useEffect} from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Questionnaire from './Components/Questionnaire';

const TRIVIA = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined)

  useEffect(() => {
    fetch(TRIVIA)
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data.results);
      setCurrentQuestion(data.results[0])
    });
  }, []);

  const handleAnswer = (answer) => {
    setCurrentQuestion(currentQuestion + 1);
    // check for the answer

    //show another question

    //change score if correct
  }
  

  return (
    <div className="container">
      <Header/>
      {questions.length > 0 ? (
        <Questionnaire data={currentQuestion} handleAnswer={handleAnswer}/>
      ) : ( 
        <p className="loading">Loading Questions...</p>
        )
      }
      
      <Footer/>
    </div>
  );
}

export default App;
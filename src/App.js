import React from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Question from "./Components/Question";
import Answers from "./Components/Answers";


function App() {
  return (
    <div className="container">
      <Header/>
      <section className="trivia">
        <Question/>
        <Answers/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
import React from 'react'
import Button from "./Button";

export default function Questionnaire({handleAnswer, data: {question, correct_answer, incorrect_answers}, }) {
    const shuffledAnswer = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);

    


    return (
        <div>
            <section className="trivia">
            <div className="question">
                <p dangerouslySetInnerHTML = {{__html: question}}></p>
            </div>
            <div className="answers">
                <Button className={correct_answer === shuffledAnswer[0] ? "right" : ''} onClick={() => handleAnswer(shuffledAnswer[0])} answer={shuffledAnswer[0]}/>
                <Button className={correct_answer === shuffledAnswer[1] ? "right" : ''} onClick={() => handleAnswer(shuffledAnswer[1])} answer={shuffledAnswer[1]}/>
                <Button className={correct_answer === shuffledAnswer[2] ? "right" : ''} onClick={() => handleAnswer(shuffledAnswer[2])} answer={shuffledAnswer[2]}/>
                <Button className={correct_answer === shuffledAnswer[3] ? "right" : ''} onClick={() => handleAnswer(shuffledAnswer[3])} answer={shuffledAnswer[3]}/>
            </div>
            </section>
        </div>
    )
}

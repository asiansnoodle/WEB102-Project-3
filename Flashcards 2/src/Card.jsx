import React from "react";
import { useState } from "react";
import flashCards from "./data";

const answerForm = (correctAnswer) => {
    const [answer, setAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(null); 

        const handleInput = (e) => {
            setAnswer(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault(); 

            if (answer.trim().toLowerCase() == correctAnswer.trim().toLowerCase()){
                setIsCorrect(true)
            }
            else {
                setIsCorrect(false)
            }
        }

        return (
            <form onSubmit={handleSubmit}>
                <input className={isCorrect === null ? "" : isCorrect ? "green" : "red"} type="text" value={answer} onChange={handleInput} placeholder="Guess the answer"/>
                <input type="submit" />
            </form>
        )

}

const Card = () => {
    const [fliped, setFliped] = useState(false)
    const [index, setIndex] = useState(0)

    const handleFlip = () => {
        setFliped(!fliped)
    }

    const getPrevCard = () => {
        if (index > 0){
            setIndex(index - 1)
        }
        setFliped(false)
    }

    const getNextCard = () => {
        if (index < flashCards.length - 1){
            setIndex(index + 1)
        }
        setFliped(false)
    }

    return (
        <div className="card-containter">
            <div className={`card ${fliped ? "flipped" : ""} ${flashCards[index].difficulty}`} onClick={handleFlip}>
                <div className="card-front">
                    <h3>{flashCards[index].question}</h3>
                </div>
                <div className="card-back">
                    <h3>{flashCards[index].answer}</h3>
                </div>
            </div>
            <div className="form-container">
                {answerForm(flashCards[index].answer)}
            </div>
            <div className="button-container">
                <button onClick={getPrevCard}>Prev</button>
                <button onClick={getNextCard}>Next</button>
            </div>
        </div>
    )

}

export default Card
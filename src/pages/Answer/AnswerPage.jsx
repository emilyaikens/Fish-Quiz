import './AnswerPage.css';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnswerPage({ current, setCurrent, correctAnswers, choices, explanations, images }) {

    const navigate = useNavigate();

    function handleClick(evt) {
        evt.preventDefault();
        if (current < 11) {
            setCurrent(current + 1);
            navigate("/question")
        } else {
            navigate("/result");
        }
    }

    let message = "Correct!";
    let wrong = ["Nope", "Not quite", "Better luck next time", "Incorrect"]

    if (choices !== correctAnswers[current]) {
        message = wrong[(Math.floor(Math.random() * 3) + 1)]
    }

    return (
        <div>
            <img class="fish-image" src={images[current]} alt="fish"></img>
            <h3>{message}</h3>
            <div><span class="answer-is">The answer is: </span>{correctAnswers[current]}</div>
            <br/>
            <div class="explanation">{explanations[current]}</div>
            <button class="answer-button" onClick={handleClick}>Next</button>
        </div>
    )
};





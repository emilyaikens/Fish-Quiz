import './AnswerPage.css';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnswerPage({ current, setCurrent, correctAnswers, choices, explanations, images }) { // props from App

    const navigate = useNavigate();

    function handleClick(evt) { // when user clicks the "next" button
        evt.preventDefault();
        if (current < 11) { // if there are more questions left
            setCurrent(current + 1); // update current (next question/answer)
            navigate("/question") // navigate to question page
        } else {
            navigate("/result"); // if there are no more questions, navigate to result page
        }
    }

    let message = "Correct!";
    let wrong = ["Nope", "Not quite", "Better luck next time", "Incorrect"]

    if (choices !== correctAnswers[current]) { // if user submits incorrect answer
        message = wrong[(Math.floor(Math.random() * 3) + 1)] // show them a randomized message
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





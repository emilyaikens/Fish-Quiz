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

    if (choices !== correctAnswers[current]) {
        message = "Not quite. The correct answer is:"
    }

    return (
        <div>
            <img class="fish-image" src={images[current]} alt="fish"></img>
            <div>{message}</div>
            <div>{correctAnswers[current]}</div>
            <div>{explanations[current]}</div>
            <button onClick={handleClick}>Next</button>
        </div>
    )
};





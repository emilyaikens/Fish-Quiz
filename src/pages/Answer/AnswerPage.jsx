import './AnswerPage.css';
import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnswerPage({ current, setCurrent, correctAnswers, choices, setScore, score }) {

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

    return (
        <div>
            <div> temp: {score}</div>
            <h1>Answer Page</h1>
            <div>The correct answer is: </div>
            <div>{correctAnswers[current]}</div>
            <button onClick={handleClick}>Next</button>
        </div>
    )
};





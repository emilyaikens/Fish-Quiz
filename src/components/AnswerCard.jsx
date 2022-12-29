import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnswerCard({ answer, setChoices, setScore, score, correctAnswers, current }) {
    const navigate = useNavigate();

    const [input, setInput] = useState("");

    function handleAddChoice(evt) {
        evt.preventDefault();
        setChoices(input);
        if (input === correctAnswers[current]) {
            setScore(score + 1);
        };
        navigate("/answer");
    }

    return (
        <div>
            <form onSubmit={handleAddChoice}>
                <div class="answer-row">
                    <input
                        type="radio" 
                        value={ answer[0] } 
                        name="choice"
                        id="first"
                        onChange={(evt) => setInput(evt.target.value)} 
                        /> 
                    <label for="first">{ answer[0] }</label> <br/>
                </div>
                <div class="answer-row">
                    <input 
                        type="radio" 
                        value={ answer[1] } 
                        name="choice" 
                        id="second"
                        onChange={(evt) => setInput(evt.target.value)} 
                        /> 
                    <label for="second">{ answer[1] }</label> <br/>
                </div>
                <div class="answer-row">
                    <input 
                        type="radio" 
                        value={ answer[2] } 
                        name="choice" 
                        id="third"
                        onChange={(evt) => setInput(evt.target.value)} 
                        /> 
                    <label for="third">{ answer[2] }</label> <br/>
                </div>
                <div class="answer-row">
                    <input 
                        type="radio" 
                        value={ answer[3] } 
                        name="choice" 
                        id="fourth"
                        onChange={(evt) => setInput(evt.target.value)} 
                        /> 
                    <label for="fourth">{ answer[3] }</label> <br/>
                </div>
                <br/>
                <div class="question-button">
                <button type="submit">Next</button>
                </div>
            </form>
        </div>
    )
};

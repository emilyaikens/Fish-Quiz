import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AnswerCard({ answer, choices, setChoices }) {

    const navigate = useNavigate();

    const [input, setInput] = useState("");

    function handleAddChoice(evt) {
        evt.preventDefault();
        setChoices(input);
        console.log(choices);
        navigate("/answer");
    }

    return (
        <div>
            <form onSubmit={handleAddChoice}>
                <input 
                    type="radio" 
                    value={ answer[0] } 
                    name="choice" 
                    onChange={(evt) => setInput(evt.target.value)} 
                    /> { answer[0] } <br/>
                <input 
                    type="radio" 
                    value={ answer[1] } 
                    name="choice" 
                    onChange={(evt) => setInput(evt.target.value)} 
                    /> { answer[1] } <br/>
                <input 
                    type="radio" 
                    value={ answer[2] } 
                    name="choice" 
                    onChange={(evt) => setInput(evt.target.value)} 
                    /> { answer[2] } <br/>
                <input 
                    type="radio" 
                    value={ answer[3] } 
                    name="choice" 
                    onChange={(evt) => setInput(evt.target.value)} 
                    /> { answer[3] } <br/>
                <br/>
                <button type="submit">Next</button>
            </form>
        </div>
    )
};

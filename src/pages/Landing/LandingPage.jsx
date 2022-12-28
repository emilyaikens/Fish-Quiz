import './LandingPage.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage({ setQuizStatus }) {

    const navigate = useNavigate();

    function handleSetQuiz(evt) {
        evt.preventDefault();
        setQuizStatus("question");
        navigate("/question");
    }

    return (
        <div>
            <img class="fish-image" src="https://i.imgur.com/BtSXY7F.png"></img>
            <h1>Fish Quiz</h1>
            <h4>How much do you know about fish?</h4>
            <br></br>
            <button onClick={handleSetQuiz}>Start</button>
        </div>
    )
};




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
            <br></br>
            <img class="fish-image" src="https://i.imgur.com/BtSXY7F.png"></img>
            <h1 class="landing-title">Fish Quiz</h1>
            <br></br>
            <button class="start-button" onClick={handleSetQuiz}>Start</button>
        </div>
    )
};




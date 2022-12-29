import './LandingPage.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage({ setQuizStatus, fish }) { // props from App

    const navigate = useNavigate();

    function handleSetQuiz(evt) { // when user clicks "start"
        evt.preventDefault();
        setQuizStatus("question"); // quizStatus no longer "landing" so landing page no longer renders
        navigate("/question"); // navigate to the question page
    }

    return (
        <div>
            <br></br>
            <img class="fish-image" src={fish} alt="fish"></img>
            <h1 class="landing-title">Fish Quiz</h1>
            <br></br>
            <button class="start-button" onClick={handleSetQuiz}>Start</button>
        </div>
    )
};




import './LandingPage.css';
import { useNavigate } from 'react-router-dom';


export default function LandingPage({ setQuizStatus, images }) {

    const navigate = useNavigate();

    function handleSetQuiz(evt) {
        evt.preventDefault();
        setQuizStatus("question");
        navigate("/question");
    }

    const fish = (Math.floor(Math.random() * 11))

    return (
        <div>
            <br></br>
            <img class="fish-image" src={images[fish]}></img>
            <h1 class="landing-title">Fish Quiz</h1>
            <br></br>
            <button class="start-button" onClick={handleSetQuiz}>Start</button>
        </div>
    )
};




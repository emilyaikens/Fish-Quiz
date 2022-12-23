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
            <h1>Landing Page</h1>
            <button onClick={handleSetQuiz}>Start</button>
        </div>
    )
};




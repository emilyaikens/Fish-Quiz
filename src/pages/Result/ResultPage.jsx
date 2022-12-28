import './ResultPage.css';
import { useNavigate } from 'react-router-dom';

export default function ResultPage({ score, setQuizStatus, setChoices, setCurrent }) {

    const navigate = useNavigate();

    let message = "you're a fish expert!"

    if (score <= 4) {
        message = "You really need to learn more about fish!"
    } else if (score <= 8 && score > 4 ) {
        message = "Not horrible"
    }

    function handleClick(evt) {
        evt.preventDefault();
        setQuizStatus("landing");
        setChoices("");
        setCurrent(0);
        navigate("/");
    }

    return (
        <div>
            <br></br>
            <h1>You scored {score}/12</h1>
            <div>{message}</div>
            <br></br>
            <button class="start-over" onClick={handleClick}>Start Over</button>
        </div>
    )
};





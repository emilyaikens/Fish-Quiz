import './ResultPage.css';
import { useNavigate } from 'react-router-dom';

export default function ResultPage({ score, setQuizStatus, setChoices, setCurrent, fish }) {

    const navigate = useNavigate();

    // below, line 9 - 15, logic to determine the result message based on score
    let message = "you're a fish expert!"

    if (score <= 4) {
        message = "You really need to learn more about fish!"
    } else if (score <= 8 && score > 4 ) {
        message = "Not horrible"
    }

    function handleClick(evt) { // when user clicks "start over", reset useStates and navigate to landing page
        evt.preventDefault();
        setQuizStatus("landing");
        setChoices("");
        setCurrent(0);
        navigate("/");
    }

    return (
        <div>
            <img class="fish-image" src={fish}></img>
            <h1 class="score"><span class="large"> Score: </span> {score}/12</h1>
            <br></br>
            <div>{message}</div>
            <br></br>
            <br></br>
            <button class="start-over" onClick={handleClick}>Start Over</button>
        </div>
    )
};





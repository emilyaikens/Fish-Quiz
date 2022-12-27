import './ResultPage.css';
import { useNavigate } from 'react-router-dom';

export default function ResultPage({ score, setQuizStatus }) {

    const navigate = useNavigate();

    let message = "you're a fish expert!"

    if (score <= 4) {
        message = "You really need to learn more about fish"
    } else if (score <= 8 && score > 4 ) {
        message = "Not horrible"
    }

    function handleClick(evt) {
        evt.preventDefault();
        setQuizStatus("landing")
        navigate("/");
    }

    return (
        <div>
            <h1>Result Page</h1>
            <div>You scored {score}/12</div>
            <div>{message}</div>
            <button onClick={handleClick}>Start Over</button>
        </div>
    )
};





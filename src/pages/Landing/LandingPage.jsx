import './LandingPage.css';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    return (
        <div>
            <h1>Landing Page</h1>
            <Link to={`/question`}>
                <button>Start</button>
            </Link>
        </div>
    )
};




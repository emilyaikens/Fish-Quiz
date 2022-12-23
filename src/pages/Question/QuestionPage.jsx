import './QuestionPage.css';
import QuestionCard from '../../components/QuestionCard';

export default function QuestionPage({ quesAns }) {

    const questions = quesAns.map((value, index) =>
        <QuestionCard key={index} index={index} question={value.question} />)

    return (
        <div>
            <h1>Question Page</h1>
            { questions[0] }
        </div>
    )
};



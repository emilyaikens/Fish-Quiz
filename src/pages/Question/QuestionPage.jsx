import './QuestionPage.css';
import QuestionCard from '../../components/QuestionCard';
import AnswerCard from '../../components/AnswerCard';

export default function QuestionPage({ quesAns, choices, setChoices, current, setCurrent }) {

    const questions = quesAns.map((value, index) =>
        <QuestionCard key={index + 100} index={index} question={value.question} />)

    const answers = quesAns.map((value, index) =>
        <AnswerCard key={index} index={index} answer={value.answer} setChoices={setChoices} choices={choices}/>)

    return (
        <div>
            <h1>Question Page</h1>
            { questions[0] }
            <br/>
            { answers[0] }
        </div>
    )
};



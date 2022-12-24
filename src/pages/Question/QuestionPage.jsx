import './QuestionPage.css';
import QuestionCard from '../../components/QuestionCard';
import AnswerCard from '../../components/AnswerCard';

export default function QuestionPage({ quesAns, choices, setChoices, current, setScore, score, correctAnswers }) {

    const questions = quesAns.map((value, index) =>
        <QuestionCard key={index + 100} index={index} question={value.question} />)

    const answers = quesAns.map((value, index) =>
        <AnswerCard key={index} index={index} answer={value.answer} setChoices={setChoices} choices={choices} setScore={setScore} score={score} correctAnswers={correctAnswers} current={current}/>)

    return (
        <div>
            <h1>Question Page</h1>
            { questions[current] }
            <br/>
            { answers[current] }
        </div>
    )
};



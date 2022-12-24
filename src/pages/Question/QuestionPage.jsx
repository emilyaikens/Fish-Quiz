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
            <h1>Question { current + 1 }</h1>
            <div>{ questions[current] }</div>
            <br/>
            <div>{ answers[current] }</div>
        </div>
    )
};



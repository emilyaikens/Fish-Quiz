import './QuestionPage.css';
import QuestionCard from '../../components/QuestionCard';
import AnswerCard from '../../components/AnswerCard';

export default function QuestionPage({ quesAns, setChoices, current, setScore, score, correctAnswers, images }) { // props from App

    const questions = quesAns.map((value, index) => // map questions from quesAns array to QuestionCard
        <QuestionCard key={index + 100} index={index} question={value.question} />)

    const answers = quesAns.map((value, index) => // map answers from quesAns array to AnswerCard
        <AnswerCard key={index} index={index} answer={value.answer} setChoices={setChoices} setScore={setScore} score={score} correctAnswers={correctAnswers} current={current}/>)

    return (
        <div>
            <img class="fish-image" src={images[current]} alt="fish"></img>
            <h3 class="question">{ questions[current] }</h3>
            <br/>
            <div class="container">
                <div class="answer-card">{ answers[current] }</div>
            </div>
        </div>
    )
};



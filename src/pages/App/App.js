import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import LandingPage from '../Landing/LandingPage';
import { quesAns } from '../../data';
import { correctAnswers } from '../../data';
import { explanations } from '../../data';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [quizStatus, setQuizStatus] = useState("landing");
  const [choices, setChoices] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  return (
    <div>
      <div class="App">
        {quizStatus === "landing"?
          <>
            <h1>Fish Quiz</h1>
            <LandingPage setQuizStatus={setQuizStatus} />
          </>
          :
          <Routes>
            < Route path="/question" element={<QuestionPage quesAns={quesAns} choices={choices} setChoices={setChoices} current={current} setCurrent={setCurrent} setScore={setScore} score={score} correctAnswers={correctAnswers} />} />
            < Route path="/answer" element={<AnswerPage correctAnswers={correctAnswers} choices={choices} current={current} setCurrent={setCurrent} setScore={setScore} score={score} explanations={explanations} />} />
            < Route path="/result" element={<ResultPage score={score} setQuizStatus={setQuizStatus}/>} />
          </Routes>
        }
      </div>
    </div>
  );
};

export default App;


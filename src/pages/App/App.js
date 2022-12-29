import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import LandingPage from '../Landing/LandingPage';
import { quesAns } from '../../data';
import { correctAnswers } from '../../data';
import { explanations } from '../../data';
import { images } from '../../data';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [quizStatus, setQuizStatus] = useState("landing");
  const [choices, setChoices] = useState("");
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const fish = images[(Math.floor(Math.random() * 11))];

  return (
    <div>
      <div class="App">
        {quizStatus === "landing"?
          <>
            <LandingPage setQuizStatus={setQuizStatus} fish={fish} />
          </>
          :
          <Routes>
            < Route path="/question" element={<QuestionPage quesAns={quesAns} setChoices={setChoices} current={current} setScore={setScore} score={score} correctAnswers={correctAnswers} images={images} />} />
            < Route path="/answer" element={<AnswerPage correctAnswers={correctAnswers} choices={choices} current={current} setCurrent={setCurrent} explanations={explanations} images={images} />} />
            < Route path="/result" element={<ResultPage score={score} setQuizStatus={setQuizStatus} setChoices={setChoices} setCurrent={setCurrent} fish={fish}/>} />
          </Routes>
        }
      </div>
    </div>
  );
};

export default App;


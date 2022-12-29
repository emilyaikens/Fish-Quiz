import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import LandingPage from '../Landing/LandingPage';
import { quesAns, correctAnswers, explanations, images } from '../../data';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [quizStatus, setQuizStatus] = useState("landing"); //determines whether landing page shows or not
  const [choices, setChoices] = useState(""); //tracks user's answer
  const [current, setCurrent] = useState(0); //tracks which question/answer the user is on
  const [score, setScore] = useState(0); //tracks score

  const fish = images[(Math.floor(Math.random() * 11))]; //select random fish image from images array

  const navigate = useNavigate();

  // If user uses the browser 'back' button the quiz will restart and they will be redirected to landing page
  window.addEventListener('popstate', (event) => {
    setQuizStatus("landing");
    setChoices("");
    setCurrent(0);
    navigate("/");
  });

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


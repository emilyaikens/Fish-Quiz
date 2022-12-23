import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import LandingPage from '../Landing/LandingPage';
import { quesAns } from '../../data';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [quizStatus, setQuizStatus] = useState("landing");

  return (
    <div>
      <div class="App">
        {quizStatus == "landing"?
          <>
            <h1>Fish Quiz</h1>
            <LandingPage setQuizStatus={setQuizStatus} />
          </>
          :
          <Routes>
            < Route path="/question" element={<QuestionPage quesAns={quesAns} />} />
            < Route path="/answer" element={<AnswerPage />} />
            < Route path="/result" element={<ResultPage />} />
          </Routes>
        }
      </div>
    </div>
  );
};

export default App;


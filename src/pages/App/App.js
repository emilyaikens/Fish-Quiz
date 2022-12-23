import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import { quesAns } from '../../data';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <div class="App">
        <h1>Fish Quiz</h1>
        <Routes>
          < Route path="/question" element={<QuestionPage quesAns={ quesAns } />} />
          < Route path="/answer" element={<AnswerPage />} />
          < Route path="/Result" element={<ResultPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;


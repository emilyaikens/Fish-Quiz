import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';
import { quesAns } from '../../data';

function App() {

  return (
    <div>
      <div class="App">
        <h1>Fish Quiz</h1>
        < QuestionPage quesAns={ quesAns }/>
        < AnswerPage />
        < ResultPage />
      </div>
    </div>
  );
};

export default App;


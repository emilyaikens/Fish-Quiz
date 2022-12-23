import './App.css';
import QuestionPage from '../Question/QuestionPage';
import AnswerPage from '../Answer/AnswerPage';
import ResultPage from '../Result/ResultPage';

function App() {

  return (
    <div>
      <div class="App">
        <h1>Fish Quiz</h1>
        < QuestionPage />
        < AnswerPage />
        < ResultPage />
      </div>
    </div>
  );
};

export default App;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './Question';
import Results from './Results';
import './Quiz.css';

const Quiz = () => {
  const { currentQuestionIndex, questions, showResults } = useSelector(state => state);
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div className="quiz-container">
        <Results />
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {showResults ? (
        <div>
          <Results />
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      ) : (
        <Question />
      )}
    </div>
  );
};

export default Quiz;

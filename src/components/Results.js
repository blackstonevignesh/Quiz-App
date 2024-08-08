import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Results = () => {
  const { score, questions, result, currentQuestionIndex } = useSelector(state => state);
  const dispatch = useDispatch();

  const handlePlayAgain = () => {
    dispatch({ type: 'RESET_QUIZ' });
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <div>
        <h2>Your Final Score: {score} / {questions.length}</h2>
        <button onClick={handlePlayAgain}>Play Again</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Score: {score} / {questions.length}</h2>
      <p>Last Question Result: {result}</p>
    </div>
  );
};

export default Results;

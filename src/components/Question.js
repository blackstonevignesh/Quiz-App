import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Question = () => {
  const { currentQuestionIndex, questions } = useSelector(state => state);
  const [timeLeft, setTimeLeft] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft === 0) {
      dispatch({ type: 'ANSWER_QUESTION', payload: '' });
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, dispatch]);

  const handleAnswer = (answer) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: answer });
  };

  return (
    <div>
      <h2>{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].options.map(option => (
          <li key={option} onClick={() => handleAnswer(option)}>{option}</li>
        ))}
      </ul>
      <p>Time left: {timeLeft} seconds</p>
    </div>
  );
};

export default Question;

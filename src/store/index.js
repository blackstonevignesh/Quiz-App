import { createStore } from 'redux';

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  showResults: false,
  result: '',
  questions: [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"],
      correctAnswer: "William Shakespeare"
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswer: "2"
    }
  ]
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ANSWER_QUESTION': {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const isCorrect = currentQuestion.correctAnswer === action.payload;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        showResults: true,
        result: isCorrect ? 'Correct' : 'Wrong'
      };
    }
    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResults: false,
        result: ''
      };
    case 'RESET_QUIZ':
      return initialState;
    default:
      return state;
  }
};

const store = createStore(quizReducer);

export default store;

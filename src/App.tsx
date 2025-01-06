import React, { useState } from 'react';
import { useRandomQuestion } from './hooks/useRandomQuestion';
import QuestionCard from './components/QuestionCard';
import AnswerStatus from './components/AnswerStatus';
import './App.css';

const App: React.FC = () => {
  // hooks
  const { question, nextQuestion } = useRandomQuestion();

  // state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]);

  // variables
  const isMultiAnswer = Array.isArray(question.correct);
  const isDisabled = isMultiAnswer ? selectedAnswer.length != 2 : !selectedAnswer.length
  const answeredLetters = selectedAnswer.map(answer => answer[0]).sort().join(' and ');
  const correctLetters = Array.isArray(question.correct)
    ? question.correct.map(answer => answer[0]).join(' and ')
    : question.correct[0];

  // functions
  const handleAnswerSelect = (item: string) => {
    if (!isSubmitted) {
      setSelectedAnswer((prev) =>
        isMultiAnswer
          ? prev.includes(item)
            ? prev.filter((answer) => answer !== item)
            : [...prev, item]
          : [item]
      );
    }
  };

  const handleSubmit = () => {
    // Toggle submission state
    setIsSubmitted(prevState => !prevState);
  
    // If already submitted, move to the next question
    if (isSubmitted) {
      nextQuestion();
      setSelectedAnswer([]);
      return;
    }
  
    // Check if the answer is correct and update the respective arrays
    const isCorrect = answeredLetters === correctLetters;
    const updatedAnswers = isCorrect ? correctAnswers : incorrectAnswers;
    const setUpdatedAnswers = isCorrect ? setCorrectAnswers : setIncorrectAnswers;
  
    setUpdatedAnswers([...updatedAnswers, question.id]);
  };

  // render
  return (
    <div className='app-wrapper'>
      <AnswerStatus
        isSubmitted={isSubmitted}
        correctLetters={correctLetters}
        answeredLetters={answeredLetters}
        correctAnswersCount={correctAnswers.length}
        incorrectAnswersCount={incorrectAnswers.length}
      />
      <QuestionCard
        question={question}
        isSubmitted={isSubmitted}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
      />
      <div className='footer'>
        <button disabled={isDisabled} onClick={handleSubmit}>
          {isSubmitted ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default App;
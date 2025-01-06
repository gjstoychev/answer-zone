import React, { useState } from 'react';
import { questionsMock } from './data/questionsMock';
import AnswerStatus from './components/AnswerStatus';
import QuestionCard from './components/QuestionCard';
import './App.css';

const App: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() => {
    return Math.floor(Math.random() * questionsMock.length);
  });
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const answeredIds = [...correctAnswers, ...incorrectAnswers];
  const remainingIndices = questionsMock
    .map((_, index) => index)
    .filter((index) => !answeredIds.includes(questionsMock[index].id));
  const question =
    questionIndex !== null ? questionsMock[questionIndex] : null;
  const totalQuestions = questionsMock.length;

  const answeredLetters = selectedAnswer
  .map((answer) => answer[0])
  .sort()
  .join(' and ');
  
  const correctLetters = Array.isArray(question?.correct)
    ? question.correct.map((answer) => answer[0]).sort().join(' and ')
    : question?.correct[0] || '';

  const nextQuestion = () => {
    if (remainingIndices.length === 0) {
      setQuestionIndex(null);
      return;
    }
    const newIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
    setQuestionIndex(newIndex);
    setSelectedAnswer([]);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (!question) return;

    if (isSubmitted) {
      nextQuestion();
      return;
    }

    const isCorrect = answeredLetters === correctLetters;
    if (isCorrect) {
      setCorrectAnswers((prev) => [...prev, question.id]);
    } else {
      setIncorrectAnswers((prev) => [...prev, question.id]);
    }

    setIsSubmitted(true);
  };

  const handleAnswerSelect = (item: string) => {
    if (!isSubmitted) {
      setSelectedAnswer((prev) =>
        Array.isArray(question?.correct)
          ? prev.includes(item)
            ? prev.filter((answer) => answer !== item)
            : [...prev, item]
          : [item]
      );
    }
  };

  if (!question) {
    return (
      <div className="finished">
        <div className='finished-content'>
          <h1>Quiz Completed!</h1>
          <AnswerStatus
            isSubmitted={false}
            correctLetters=""
            answeredLetters=""
            correctAnswersCount={correctAnswers.length}
            incorrectAnswersCount={incorrectAnswers.length}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <AnswerStatus
        isSubmitted={isSubmitted}
        correctLetters={correctLetters}
        answeredLetters={answeredLetters}
        correctAnswersCount={correctAnswers.length}
        incorrectAnswersCount={incorrectAnswers.length}
        totalQuestions={totalQuestions}
      />
      <QuestionCard
        question={question}
        isSubmitted={isSubmitted}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
      />
      <div className="footer">
        <button
          disabled={!selectedAnswer.length || (Array.isArray(question.correct) && selectedAnswer.length !== 2)}
          onClick={handleSubmit}
        >
          {isSubmitted ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default App;

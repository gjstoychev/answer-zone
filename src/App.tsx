import React, { useState } from 'react';
import { combinedQuestions } from './data/combinedQuestions';
import AnswerStatus from './components/AnswerStatus';
import QuestionCard from './components/QuestionCard';
import IncorrectList from './components/IncorrectList';
import { formatAnswers } from './utils/answers';
import { getRemainingIndices, getIncorrectQuestions } from './utils/questions';
import { useQuestionState } from './hooks/useQuestionState';
import { IncorrectAnswerType } from './types';
import './App.css';

const App: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswerType[]>([]);
  const [showStatus, setShowStatus] = useState(false);

  const answeredIds = [...correctAnswers, ...incorrectAnswers.map((item) => item.id)];
  const remainingIndices = getRemainingIndices(combinedQuestions, answeredIds);
  const incorrectQuestions = getIncorrectQuestions(combinedQuestions, incorrectAnswers);

  const {
    question,
    selectedAnswer,
    isSubmitted,
    setSelectedAnswer,
    setIsSubmitted,
    nextQuestion,
  } = useQuestionState(combinedQuestions);

  const totalQuestions = combinedQuestions.length;

  const answeredLetters = formatAnswers(selectedAnswer);

  const correctLetters = formatAnswers(
    Array.isArray(question?.correct) ? question.correct : [question?.correct || '']
  );

  const handleSubmit = () => {
    if (!question) return;

    if (isSubmitted) {
      nextQuestion(remainingIndices);
      return;
    }

    const isCorrect = answeredLetters === correctLetters;
    if (isCorrect) {
      setCorrectAnswers((prev) => [...prev, question.id]);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        { id: question.id, given: selectedAnswer },
      ]);
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

  if (!question || showStatus) {
    return (
      <div className="app-wrapper">
        <AnswerStatus
          isSubmitted={false}
          correctLetters=""
          answeredLetters=""
          correctAnswersCount={correctAnswers.length}
          incorrectAnswersCount={incorrectAnswers.length}
          totalQuestions={totalQuestions}
          onResume={() => setShowStatus((prev) => !prev)}
        />
        <div className="quiz-status">
          <h1>{showStatus ? "Quiz paused" : "Quiz Completed!"}</h1>
          {!!incorrectAnswers.length && (
            <h2>Incorrect Answers Report ({incorrectAnswers.length})</h2>
          )}
          <IncorrectList
            incorrectQuestions={incorrectQuestions}
            incorrectAnswers={incorrectAnswers}
          />
          {showStatus && question && (
            <div className="footer">
              <button onClick={() => setShowStatus((prev) => !prev)}>Resume</button>
            </div>
          )}
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
        onResume={() => setShowStatus((prev) => !prev)}
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

import React, { useState } from 'react';
import { combinedQuestions} from './data/combinedQuestions';
import AnswerStatus from './components/AnswerStatus';
import QuestionCard from './components/QuestionCard';
import LetterCircles from './components/LetterCircles';
import './App.css';

const App: React.FC = () => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() => {
    return Math.floor(Math.random() * combinedQuestions.length);
  });
  const [showStatus, setShowStatus] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<{ id: number; given: string[] }[]>([]);

  const answeredIds = [...correctAnswers, ...incorrectAnswers];
  const remainingIndices = combinedQuestions
    .map((_, index) => index)
    .filter((index) => !answeredIds.includes(combinedQuestions[index].id));
  const question =
    questionIndex !== null ? combinedQuestions[questionIndex] : null;
  const totalQuestions = combinedQuestions.length;

  const answeredLetters = selectedAnswer.map((answer) => answer[0]).sort().join(',');
  
  const correctLetters = Array.isArray(question?.correct)
    ? question.correct.map((answer: string) => answer[0]).sort().join(',')
    : question?.correct[0] || '';

  const incorrectQuestions = combinedQuestions.filter((question) =>
    incorrectAnswers.some((item) => item.id === question.id)
  );

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
        <div className='quiz-status'>
          <h1>{showStatus ? "Quiz paused" : "Quiz Completed!"}</h1>
          {!!incorrectAnswers.length && <h2>Incorrect Answers Report ({incorrectAnswers.length})</h2>}

          {incorrectQuestions.map((question) => {
            const givenAnswers = incorrectAnswers.find((item) => item.id === question.id)?.given || [];
            const answeredHistoryLetters = givenAnswers.map((answer) => answer[0]).sort().join(',');
            const correctHistoryLetters = Array.isArray(question.correct)
              ? question.correct.map((answer) => answer[0]).sort().join(',')
              : question.correct[0] || '';

            return (
              <React.Fragment key={question.id}>
                <QuestionCard
                  question={question}
                  isSubmitted={true}
                  selectedAnswer={givenAnswers || []}
                />
                <div className="general-answers-status">
                  <LetterCircles title="Answered:" letters={answeredHistoryLetters} />
                  <LetterCircles title="Correct:" letters={correctHistoryLetters} />
                </div>
              </React.Fragment>
            );
          })}
          {showStatus && question && (
            <div className='footer'>
              <button onClick={() => setShowStatus((prev) => !prev)}>
                Resume
              </button>
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

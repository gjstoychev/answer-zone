import React from 'react';
import { useRandomQuestion } from '../hooks/useRandomQuestion';

interface AnswerStatusProps {
  isSubmitted: boolean;
  correctLetters: string;
  answeredLetters: string;
  correctAnswersCount: number;
  incorrectAnswersCount: number;
}

const AnswerStatus: React.FC<AnswerStatusProps> = ({
  isSubmitted,
  correctLetters,
  answeredLetters,
  correctAnswersCount,
  incorrectAnswersCount,
}) => {
  // hooks
  const { totalQuestions } = useRandomQuestion();

  // variables
  const totalAnswersGiven = correctAnswersCount + incorrectAnswersCount;
  const successRate = Math.round((correctAnswersCount / totalAnswersGiven) * 100) || 0;
  const isCorrect = answeredLetters === correctLetters;
  const answerStatus = isCorrect ? 'Correct' : 'Incorrect';
  const answerStatusColor = isSubmitted
    ? isCorrect ? 'answer-correct' : 'answer-incorrect'
    : '';

  // render
  return (
    <div className={`answer-status ${answerStatusColor}`}>
      {isSubmitted ? (
        <>
          <p>{answerStatus}</p>
          <p>Your Answer: {answeredLetters}</p>
          <p>Correct Answer: {correctLetters}</p>
        </>
      ) : (
        <>
          <p>{`Questions: ${totalAnswersGiven} / ${totalQuestions}`}</p>
          <p>|</p>
          <p>Correct: {correctAnswersCount}</p>
          <p>|</p>
          <p>Incorrect: {incorrectAnswersCount}</p>
          <p>|</p>
          <p>{successRate}% Success Rate</p>
        </>
      )}
    </div>
  );
};

export default AnswerStatus;

import React from 'react';

interface AnswerStatusProps {
  isSubmitted: boolean;
  correctLetters: string;
  answeredLetters: string;
  correctAnswersCount: number;
  incorrectAnswersCount: number;
  totalQuestions: number;
}

const AnswerStatus: React.FC<AnswerStatusProps> = ({
  isSubmitted,
  correctLetters,
  answeredLetters,
  correctAnswersCount,
  incorrectAnswersCount,
  totalQuestions,
}) => {
  const totalAnswersGiven = correctAnswersCount + incorrectAnswersCount;
  const successRate = Math.round((correctAnswersCount / totalAnswersGiven) * 100) || 0;
  const isCorrect = answeredLetters === correctLetters;
  const answerStatus = isCorrect ? 'Correct' : 'Incorrect';
  const answerStatusColor = isSubmitted
    ? isCorrect ? 'answer-correct' : 'answer-incorrect'
    : '';

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

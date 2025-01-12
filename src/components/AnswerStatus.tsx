import React from "react";
import LetterCircles from "./LetterCircles";

interface AnswerStatusProps {
  hasAnswered: boolean;
  correctLetters: string;
  answeredLetters: string;
  correctAnswersCount: number;
  incorrectAnswersCount: number;
  totalQuestions: number;
  onResume?: () => void;
}

const AnswerStatus: React.FC<AnswerStatusProps> = ({
  hasAnswered,
  correctLetters,
  answeredLetters,
  correctAnswersCount,
  incorrectAnswersCount,
  totalQuestions,
  onResume,
}) => {
  const totalAnswersGiven = correctAnswersCount + incorrectAnswersCount;
  const successRate = Math.round((correctAnswersCount / totalAnswersGiven) * 100) || 0;
  const isCorrect = answeredLetters === correctLetters;
  const answerStatus = isCorrect ? "Correct" : "Incorrect";
  const answerStatusColor = hasAnswered
    ? isCorrect ? "answer-correct" : "answer-incorrect"
    : "";

  return (
    <div className={`answer-status ${answerStatusColor}`} onClick={onResume}>
      {hasAnswered ? (
        <>
          <p>{answerStatus}</p>
          <LetterCircles title="Answered:" letters={answeredLetters} />
          <LetterCircles title="Correct:" letters={correctLetters} />
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

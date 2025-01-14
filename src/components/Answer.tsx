import React from "react";
import { AnswersType } from "../types";

interface AnswerProps {
  answer: AnswersType;
  className: string;
  hasAnswered: boolean;
  onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, className, hasAnswered, onClick }) => {
  const answerStyles = hasAnswered ? "definition" : "details";

  return (
    <p className={className} onClick={onClick}>
      <span className={answerStyles}>{answer.definition}</span> {hasAnswered && answer.details}
    </p>
  );
};

export default Answer;
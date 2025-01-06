import React from 'react';

interface AnswerProps {
  answer: string;
  className: string;
  onClick: () => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, className, onClick }) => {
  return (
    <p className={className} onClick={onClick}>
      {answer}
    </p>
  );
};

export default Answer;
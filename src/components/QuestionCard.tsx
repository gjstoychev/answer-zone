import React from "react";
import Answer from "./Answer";

interface QuestionCardProps {
  question: {
    id: number;
    question: string;
    answers: string[];
    correct: string | string[];
  };
  hasAnswered: boolean;
  selectedAnswer: string[];
  onSelectAnswer?: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  hasAnswered,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const { id, question: questionText, answers, correct } = question;

  const getAnswerClass = (answer: string) => {
    const isAnswerSelected = selectedAnswer.includes(answer);
  
    if (!hasAnswered) return isAnswerSelected ? "selected" : "";
  
    const isCorrectAnswer = Array.isArray(correct)
      ? correct.includes(answer)
      : answer === correct;
  
    if (isCorrectAnswer) return "correct";
    if (isAnswerSelected) return "wrong";

    return "skipped";
  };

  const handleClick = (answer: string) => onSelectAnswer && onSelectAnswer(answer)
  
  return (
    <div className="question-wrapper">
      <p className="question-line">{questionText}</p>
      <div className="answers-wrapper">
        {answers.map((answer, index) => (
          <Answer
            key={index.toString() + id}
            answer={answer}
            className={getAnswerClass(answer)}
            onClick={() => handleClick(answer)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

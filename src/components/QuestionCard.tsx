import React from "react";
import Answer from "./Answer";
import { AnswersType } from "../types";

interface QuestionCardProps {
  question: {
    id: number;
    question: string;
    answers: AnswersType[];
    correct: string | string[];
  };
  hasAnswered: boolean;
  selectedAnswer: string[];
  onSelectAnswer?: (answer: string) => void;
  onGoToNextQuestion?: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  hasAnswered,
  selectedAnswer,
  onSelectAnswer,
  onGoToNextQuestion,
}) => {
  const { id, question: questionText, answers, correct } = question;

  const getAnswerClass = (answer: string) => {
    const isAnswerSelected = selectedAnswer.includes(answer);
  
    if (!hasAnswered) return isAnswerSelected ? "selected active" : "active";
  
    const isCorrectAnswer = Array.isArray(correct)
      ? correct.includes(answer)
      : answer === correct;
  
    if (isCorrectAnswer) return "correct";
    if (isAnswerSelected) return "wrong";

    return "skipped";
  };

  const handleClick = (answer: string) => onSelectAnswer && onSelectAnswer(answer)

  const handleWrapperClick = () => {
    if (onGoToNextQuestion && hasAnswered) {
      onGoToNextQuestion()
    }
  }
  
  return (
    <div className="question-wrapper" onClick={handleWrapperClick}>
      <p className="question-line">{questionText}</p>
      <div className="answers-wrapper">
        {answers && answers.map((answer: AnswersType, index: number) => (
          <Answer
            key={index.toString() + id}
            answer={answer}
            hasAnswered={hasAnswered}
            className={getAnswerClass(answer.definition)}
            onClick={() => handleClick(answer.definition)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;

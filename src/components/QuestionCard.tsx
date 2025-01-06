import React from 'react';
import Answer from './Answer';

interface QuestionCardProps {
  question: {
    question: string;
    answers: string[];
    correct: string | string[];
  };
  isSubmitted: boolean;
  selectedAnswer: string[];
  onSelectAnswer: (answer: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  isSubmitted,
  selectedAnswer,
  onSelectAnswer,
}) => {
  const { question: questionText, answers, correct } = question;

  const isMultiAnswer = Array.isArray(correct);

  const getAnswerClass = (answer: string) => {
    const isAnswerSelected = selectedAnswer.includes(answer);
  
    if (!isSubmitted) return isAnswerSelected ? 'selected' : '';
  
    const isCorrectAnswer = isMultiAnswer ? correct.includes(answer) : answer === correct;
  
    if (isCorrectAnswer) return 'correct';
    if (isAnswerSelected) return 'wrong';

    return 'skipped';
  };
  
  return (
    <div className='question-wrapper'>
      <p className='question-line'>{questionText}</p>
      <div className='answers-wrapper'>
        {answers.map((answer) => (
          <Answer
            key={answer}
            answer={answer}
            className={getAnswerClass(answer)}
            onClick={() => onSelectAnswer(answer)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
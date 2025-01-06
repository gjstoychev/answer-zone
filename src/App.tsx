import React, { useState } from 'react';
import { useRandomQuestion } from './hooks/useRandomQuestion';
import { QuestionCard } from './components/QuestionCard';
import './App.css';

const App: React.FC = () => {
  const { question, nextQuestion, questionIndex } = useRandomQuestion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);

  const isMultiAnswer = Array.isArray(question.correct);
  const isDisabled = isMultiAnswer ? selectedAnswer.length != 2 : !selectedAnswer.length

  const handleAnswerSelect = (item: string) => {
    if (!isSubmitted) {
      setSelectedAnswer((prev) =>
        isMultiAnswer
          ? prev.includes(item)
            ? prev.filter((answer) => answer !== item)
            : [...prev, item]
          : [item]
      );
    }
  };

  const handleSubmit = () => {
    if (isSubmitted) {
      nextQuestion();
      setSelectedAnswer([]);
    }
    setIsSubmitted(!isSubmitted);
  };

  return (
    <div className='app-wrapper'>
      <h4>
        QUESTION {questionIndex + 1}/{question.totalQuestions} |{' '}
        {selectedAnswer.join(', ')}
      </h4>
      <QuestionCard
        question={question}
        isSubmitted={isSubmitted}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
      />
      <div>
        <button disabled={isDisabled} onClick={handleSubmit}>
          {isSubmitted ? 'Next' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default App;
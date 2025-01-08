import { useState } from 'react';
import { combinedQuestions } from '../data/combinedQuestions.ts';

interface UseRandomQuestionProps {
  answeredQuestionsRef: React.MutableRefObject<number[]>; // Pass a ref to track answered questions
}

export const useRandomQuestion = ({ answeredQuestionsRef }: UseRandomQuestionProps) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() => {
    const remainingIndices = combinedQuestions
      .map((_, index) => index)
      .filter(index => !answeredQuestionsRef.current.includes(index));

    return remainingIndices.length > 0
      ? remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
      : null;
  });

  const nextQuestion = () => {
    const remainingIndices = combinedQuestions
      .map((_, index) => index)
      .filter(index => !answeredQuestionsRef.current.includes(index));

    if (remainingIndices.length > 0) {
      const newIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
      setQuestionIndex(newIndex);
    } else {
      setQuestionIndex(null); // No remaining questions
    }
  };

  const question = questionIndex !== null
    ? {
        ...combinedQuestions[questionIndex],
        totalQuestions: combinedQuestions.length,
      }
    : null;

  const totalQuestions = combinedQuestions.length;

  return { question, nextQuestion, totalQuestions };
};

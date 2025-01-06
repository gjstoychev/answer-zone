import { useState } from 'react';
import { questionsMock } from '../data/questionsMock.ts';

interface UseRandomQuestionProps {
  answeredQuestionsRef: React.MutableRefObject<number[]>; // Pass a ref to track answered questions
}

export const useRandomQuestion = ({ answeredQuestionsRef }: UseRandomQuestionProps) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() => {
    const remainingIndices = questionsMock
      .map((_, index) => index)
      .filter(index => !answeredQuestionsRef.current.includes(index));

    return remainingIndices.length > 0
      ? remainingIndices[Math.floor(Math.random() * remainingIndices.length)]
      : null;
  });

  const nextQuestion = () => {
    const remainingIndices = questionsMock
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
        ...questionsMock[questionIndex],
        totalQuestions: questionsMock.length,
      }
    : null;

  const totalQuestions = questionsMock.length;

  return { question, nextQuestion, totalQuestions };
};
import { useState } from 'react';
import { questionsMock } from '../data/questionsMock.ts';

export const useRandomQuestion = () => {
  const [questionIndex, setQuestionIndex] = useState(() =>
    Math.floor(Math.random() * questionsMock.length)
  );

  const nextQuestion = () => {
    setQuestionIndex(Math.floor(Math.random() * questionsMock.length));
  };

  const question = {
    ...questionsMock[questionIndex],
    totalQuestions: questionsMock.length,
  };

  const totalQuestions = questionsMock.length;

  return { question, nextQuestion, totalQuestions };
};
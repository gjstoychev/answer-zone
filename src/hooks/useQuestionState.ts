import { useState } from "react";
import { QuestionType } from "../types";

export const useQuestionState = (questions: QuestionType[]) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() =>
    Math.floor(Math.random() * questions.length)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const question = questionIndex !== null ? questions[questionIndex] : null;

  const nextQuestion = (remainingIndices: number[]) => {
    if (remainingIndices.length === 0) {
      setQuestionIndex(null);
      return;
    }
    const newIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
    setQuestionIndex(newIndex);
    setSelectedAnswer([]);
    setIsSubmitted(false);
  };

  return {
    questionIndex,
    question,
    selectedAnswer,
    isSubmitted,
    setSelectedAnswer,
    setIsSubmitted,
    nextQuestion,
  };
};

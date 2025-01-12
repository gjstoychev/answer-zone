import { useState, useCallback } from "react";
import { QuestionType } from "../types";

export const useQuestionState = (questions: QuestionType[]) => {
  const [questionIndex, setQuestionIndex] = useState<number | null>(() =>
    Math.floor(Math.random() * questions.length)
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);

  const question = questionIndex !== null ? questions[questionIndex] : null;

  const nextQuestion = useCallback(
    (remainingIndices: number[]) => {
      if (remainingIndices.length === 0) {
        // No questions left
        setQuestionIndex(null);
        return;
      }
      const newIndex = remainingIndices[Math.floor(Math.random() * remainingIndices.length)];
      setQuestionIndex(newIndex);
      setSelectedAnswer([]);
      setHasAnswered(false);
    },
    [setQuestionIndex, setSelectedAnswer, setHasAnswered]
  );

  return {
    questionIndex,
    question,
    selectedAnswer,
    hasAnswered,
    setSelectedAnswer,
    setHasAnswered,
    nextQuestion,
  };
};

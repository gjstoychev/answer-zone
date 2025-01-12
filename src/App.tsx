import React, { useState, useEffect } from "react";
import { combinedQuestions } from "./data/combinedQuestions";
import AnswerStatus from "./components/AnswerStatus";
import QuestionCard from "./components/QuestionCard";
import IncorrectList from "./components/IncorrectList";
import ConfirmationModal from "./components/ConfirmationModal";
import { useQuestionState } from "./hooks/useQuestionState";
import { saveToStorage, getFromStorage, removeFromStorage } from "./utils/storageUtils";
import { getRemainingIndices, getIncorrectQuestions, formatAnswers } from "./utils/questionsUtils";
import { IncorrectAnswerType } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswerType[]>([]);
  const [showStatus, setShowStatus] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const answeredIds = [...correctAnswers, ...incorrectAnswers.map((item) => item.id)];
  const remainingIndices = getRemainingIndices(combinedQuestions, answeredIds);
  const incorrectQuestions = getIncorrectQuestions(combinedQuestions, incorrectAnswers);

  const {
    question,
    selectedAnswer,
    hasAnswered,
    setSelectedAnswer,
    setHasAnswered,
    nextQuestion,
  } = useQuestionState(combinedQuestions);

  const totalQuestions = combinedQuestions.length;

  const answeredLetters = formatAnswers(selectedAnswer);

  const correctLetters = formatAnswers(
    Array.isArray(question?.correct) ? question.correct : [question?.correct || '']
  );

  useEffect(() => {
    const storedIncorrectAnswers = getFromStorage<IncorrectAnswerType[]>("incorrectAnswers") || [];
    const storedCorrectAnswers = getFromStorage<number[]>("correctAnswers") || [];
  
    setIncorrectAnswers(storedIncorrectAnswers);
    setCorrectAnswers(storedCorrectAnswers);
  
    // Calculate remaining indices and call nextQuestion
    const newRemainingIndices = getRemainingIndices(combinedQuestions, [
      ...storedCorrectAnswers,
      ...storedIncorrectAnswers.map((item) => item.id),
    ]);
  
    nextQuestion(newRemainingIndices);
  }, [nextQuestion]);

  const handleSubmit = () => {
    if (!question) return;

    if (hasAnswered) {
      nextQuestion(remainingIndices);
      return;
    }

    if (answeredLetters === correctLetters) {
      setCorrectAnswers((prev) => {
        const updatedCorrectAnswers = [...prev, question.id];
        saveToStorage("correctAnswers", updatedCorrectAnswers);
        return updatedCorrectAnswers;
      });
    } else {
      const newIncorrectAnswer = { id: question.id, given: selectedAnswer };
      setIncorrectAnswers((prev) => {
        const updatedIncorrectAnswers = [...prev, newIncorrectAnswer];
        saveToStorage("incorrectAnswers", updatedIncorrectAnswers);
        return updatedIncorrectAnswers;
      });
    }

    setHasAnswered(true);
  };

  const handleAnswerSelect = (item: string) => {
    if (!hasAnswered) {
      setSelectedAnswer((prev) =>
        Array.isArray(question?.correct)
          ? prev.includes(item)
            ? prev.filter((answer) => answer !== item)
            : [...prev, item]
          : [item]
      );
    }
  };

  const handleConfirmReset = () => {
    setIsModalOpen(false);

    // Clear state
    setCorrectAnswers([]);
    setIncorrectAnswers([]);

    // Clear localStorage
    removeFromStorage("correctAnswers");
    removeFromStorage("incorrectAnswers");

    // Recalculate indices after resetting state
    const newRemainingIndices = combinedQuestions.map((_, index) => index);

    // Start with a fresh question
    nextQuestion(newRemainingIndices);
  };

  const handleCancelReset = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setIsModalOpen(true);
  };

  if (!question || showStatus) {
    return (
      <div className="app-wrapper">
        <AnswerStatus
          hasAnswered={false}
          correctLetters=""
          answeredLetters=""
          correctAnswersCount={correctAnswers.length}
          incorrectAnswersCount={incorrectAnswers.length}
          totalQuestions={totalQuestions}
          onResume={() => setShowStatus((prev) => !prev)}
        />
        <div className="quiz-status">
          <h1>{showStatus ? "Quiz paused" : "Quiz Completed!"}</h1>
          {!!incorrectAnswers.length && (
            <h2 className="quiz-status-subheader">Incorrect Answers Report ({incorrectAnswers.length})</h2>
          )}
          <IncorrectList
            incorrectQuestions={incorrectQuestions}
            incorrectAnswers={incorrectAnswers}
          />
          <div className="footer">
            {showStatus && question && (
              <button onClick={() => setShowStatus((prev) => !prev)}>Resume</button>
            )}
            {!question && <button onClick={handleReset}>Reset</button>}
          </div>
        </div>
        {isModalOpen && (
          <ConfirmationModal
            message="This action will reset all progress. Are you sure you want to proceed?"
            onConfirm={handleConfirmReset}
            onCancel={handleCancelReset}
          />
        )}
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <AnswerStatus
        hasAnswered={hasAnswered}
        correctLetters={correctLetters}
        answeredLetters={answeredLetters}
        correctAnswersCount={correctAnswers.length}
        incorrectAnswersCount={incorrectAnswers.length}
        totalQuestions={totalQuestions}
        onResume={() => setShowStatus((prev) => !prev)}
      />
      <QuestionCard
        question={question}
        hasAnswered={hasAnswered}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
      />
      <div className="footer">
        <button
          disabled={!selectedAnswer.length || (Array.isArray(question.correct) && selectedAnswer.length !== 2)}
          onClick={handleSubmit}
        >
          {hasAnswered ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default App;

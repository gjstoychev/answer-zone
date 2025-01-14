import React, { useState, useEffect } from "react";
import { combinedQuestions } from "./data/combinedQuestions";
import AnswerStatus from "./components/AnswerStatus";
import QuestionCard from "./components/QuestionCard";
import IncorrectList from "./components/IncorrectList";
import CircleIndicator from "./components/CircleIndicator";
import ConfirmationModal from "./components/ConfirmationModal";
import { useQuestionState } from "./hooks/useQuestionState";
import { saveToStorage, getFromStorage, removeFromStorage } from "./utils/storageUtils";
import { getRemainingIndices, getIncorrectQuestions, formatAnswers } from "./utils/questionsUtils";
import { IncorrectAnswerType } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswerType[]>([]);
  const [showStatus, setShowStatus] = useState(true);
  const [showReport, setShowReport] = useState(false);
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
  const completedPercentage = Math.round(
    (1 - remainingIndices.length / totalQuestions) * 100
  );
  const successRate = Math.round(
    (correctAnswers.length /
      (correctAnswers.length + incorrectAnswers.length)) *
      100
  ) || 0;

  useEffect(() => {
    const storedIncorrectAnswers = getFromStorage<IncorrectAnswerType[]>("incorrectAnswers") || [];
    const storedCorrectAnswers = getFromStorage<number[]>("correctAnswers") || [];
  
    setIncorrectAnswers(storedIncorrectAnswers);
    setCorrectAnswers(storedCorrectAnswers);
  
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
    setShowStatus(true);
    setCorrectAnswers([]);
    setIncorrectAnswers([]);

    removeFromStorage("correctAnswers");
    removeFromStorage("incorrectAnswers");

    const newRemainingIndices = combinedQuestions.map((_, index) => index);
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
          {completedPercentage ? (
            <>
              <h1>Quiz {completedPercentage === 100 ? "Completed!" : "Progress"}</h1>
              <div className="progress-wrapper">
                <CircleIndicator
                  percentage={completedPercentage}
                  label="Progress %"
                />
                <CircleIndicator percentage={successRate} label="Accuracy %" />
              </div>
            </>
          ) : (
            <>
              <h1>AWS Cloud Practitioner Quiz</h1>
              <h2 className="new-quiz-subheader">
                CLF-C02 Practice Questions ({totalQuestions} available)
              </h2>
            </>
          )}

          {showStatus && question && (
            <div className="action-button">
              <button
                className={completedPercentage ? "" : "start-new"}
                onClick={() => setShowStatus((prev) => !prev)}
              >
                {completedPercentage ? "Resume Quiz" : "Start"}
              </button>
            </div>
          )}
          {!!completedPercentage && (
            <div className="action-button">
              <button onClick={handleReset}>Reset Quiz</button>
            </div>
          )}
          {!!incorrectAnswers.length && (
            <div className="action-button">
              <button onClick={() => setShowReport((prev) => !prev)}>
                {showReport ? "Hide" : "Show" } Report
              </button>
            </div>
          )}
          {showReport && !!incorrectAnswers.length && (
            <>
              <h2 className="quiz-status-subheader">Incorrect Answers Report ({incorrectAnswers.length})</h2>
              <IncorrectList
                incorrectQuestions={incorrectQuestions}
                incorrectAnswers={incorrectAnswers}
              />
            </>
          )}
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
      <button
        className="action-button"
        disabled={!selectedAnswer.length || (Array.isArray(question.correct) && selectedAnswer.length !== 2)}
        onClick={handleSubmit}
      >
        {hasAnswered ? "Next" : "Submit"}
      </button>
    </div>
  );
};

export default App;

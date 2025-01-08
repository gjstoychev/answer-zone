import React, { useState, useEffect } from "react";
import { combinedQuestions } from "./data/combinedQuestions";
import AnswerStatus from "./components/AnswerStatus";
import QuestionCard from "./components/QuestionCard";
import IncorrectList from "./components/IncorrectList";
import { useQuestionState } from "./hooks/useQuestionState";
import { saveToStorage, getFromStorage } from "./utils/storageUtils";
import { getRemainingIndices, getIncorrectQuestions, formatAnswers } from "./utils/questionsUtils";
import { IncorrectAnswerType } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswerType[]>([]);
  const [showStatus, setShowStatus] = useState(false);

  const answeredIds = [...correctAnswers, ...incorrectAnswers.map((item) => item.id)];
  const remainingIndices = getRemainingIndices(combinedQuestions, answeredIds);
  const incorrectQuestions = getIncorrectQuestions(combinedQuestions, incorrectAnswers);

  const {
    question,
    selectedAnswer,
    isSubmitted,
    setSelectedAnswer,
    setIsSubmitted,
    nextQuestion,
  } = useQuestionState(combinedQuestions);

  const totalQuestions = combinedQuestions.length;

  const answeredLetters = formatAnswers(selectedAnswer);

  const correctLetters = formatAnswers(
    Array.isArray(question?.correct) ? question.correct : [question?.correct || '']
  );

  useEffect(() => {
    const storedIncorrectAnswers = getFromStorage<IncorrectAnswerType[]>("incorrectAnswers");
    const storedCorrectAnswers = getFromStorage<number[]>("correctAnswers");
  
    if (storedIncorrectAnswers) {
      setIncorrectAnswers(storedIncorrectAnswers);
    }
    if (storedCorrectAnswers) {
      setCorrectAnswers(storedCorrectAnswers);
    }
  }, []);

  const handleSubmit = () => {
    if (!question) return;

    if (isSubmitted) {
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

    setIsSubmitted(true);
  };

  const handleAnswerSelect = (item: string) => {
    if (!isSubmitted) {
      setSelectedAnswer((prev) =>
        Array.isArray(question?.correct)
          ? prev.includes(item)
            ? prev.filter((answer) => answer !== item)
            : [...prev, item]
          : [item]
      );
    }
  };

  if (!question || showStatus) {
    return (
      <div className="app-wrapper">
        <AnswerStatus
          isSubmitted={false}
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
          {showStatus && question && (
            <div className="footer">
              <button onClick={() => setShowStatus((prev) => !prev)}>Resume</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <AnswerStatus
        isSubmitted={isSubmitted}
        correctLetters={correctLetters}
        answeredLetters={answeredLetters}
        correctAnswersCount={correctAnswers.length}
        incorrectAnswersCount={incorrectAnswers.length}
        totalQuestions={totalQuestions}
        onResume={() => setShowStatus((prev) => !prev)}
      />
      <QuestionCard
        question={question}
        isSubmitted={isSubmitted}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
      />
      <div className="footer">
        <button
          disabled={!selectedAnswer.length || (Array.isArray(question.correct) && selectedAnswer.length !== 2)}
          onClick={handleSubmit}
        >
          {isSubmitted ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default App;

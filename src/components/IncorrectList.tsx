import React from 'react';
import QuestionCard from './QuestionCard';
import LetterCircles from './LetterCircles';
import { QuestionType, IncorrectAnswerType } from '../types';
import { formatAnswers } from '../utils/answers';

interface Props {
  incorrectQuestions: QuestionType[];
  incorrectAnswers: IncorrectAnswerType[];
}

const IncorrectList: React.FC<Props> = ({ incorrectQuestions, incorrectAnswers }) => {
  return (
    <>
      {incorrectQuestions.map((question) => {
        const givenAnswers = incorrectAnswers.find((item) => item.id === question.id)?.given || [];
        const answeredHistoryLetters = formatAnswers(givenAnswers);
        const correctHistoryLetters = formatAnswers(
          Array.isArray(question.correct) ? question.correct : [question.correct]
        );

        return (
          <React.Fragment key={question.id}>
            <QuestionCard
              question={question}
              isSubmitted={true}
              selectedAnswer={givenAnswers || []}
            />
            <div className="general-answers-status">
              <LetterCircles title="Answered:" letters={answeredHistoryLetters} />
              <LetterCircles title="Correct:" letters={correctHistoryLetters} />
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default IncorrectList;

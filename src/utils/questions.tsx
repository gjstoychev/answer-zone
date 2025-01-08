import { QuestionType, IncorrectAnswerType } from '../types';

export const getRemainingIndices = (questions: QuestionType[], answeredIds: number[]): number[] =>
  questions.map((_, index) => index).filter((index) => !answeredIds.includes(questions[index].id));

export const getIncorrectQuestions = (
  questions: QuestionType[],
  incorrectAnswers: IncorrectAnswerType[]
): QuestionType[] =>
  questions.filter((question) => incorrectAnswers.some((item) => item.id === question.id));
  
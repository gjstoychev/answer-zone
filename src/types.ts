export interface AnswersType {
  definition: string,
  details: string,
}

export interface QuestionType {
  id: number;
  question: string;
  answers: AnswersType[];
  correct: string[] | string;
}
  
export interface IncorrectAnswerType {
  id: number;
  given: string[];
}

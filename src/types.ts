export interface QuestionType {
  id: number;
  question: string;
  answers: string[];
  correct: string[] | string;
}
  
export interface IncorrectAnswerType {
  id: number;
  given: string[];
}

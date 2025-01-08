export const formatAnswers = (answers: string[]): string => 
  answers.map((answer) => answer[0]).sort().join(',');

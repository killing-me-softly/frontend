export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  answer: string;
}

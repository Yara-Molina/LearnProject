export interface WordChallenge {
    id: number;
    level: number;
    word?: string;
    incompletedWord?: string;
    missingLetter?: string;
    letter?: string;
    clue?: string;
    imageUrl?: string;
    options?: string[];
    correctAnswer: string;
    timeLimit?: number;
  }
import { WordChallenge } from "./word-chanllenge";// Adjust the path as needed

export interface GameState {
    currentLevel: number;
    score: number;
    lives: number;
    currentChallenge: WordChallenge | null;
    timer?: number;
    completed: boolean;
    gameStarted: boolean;
  }
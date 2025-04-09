export interface WordChallenge {
  id: number;
  texto: string;
  nivel: number;
  pista?: string;
  imagen_url?: string;
  answer?: string;
}

// src/app/services/game.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WordChallenge } from '../models/word-chanllenge';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseUrl = 'http://127.0.0.1:8000/api/palabras';

  constructor(private http: HttpClient) {}

  getLevelData(level: number): Observable<WordChallenge[]> {
    return this.http.get<WordChallenge[]>(`${this.baseUrl}/nivel/${level}/`);
  }
}

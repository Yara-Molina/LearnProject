// src/app/services/game.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameState } from '../models/game-state';
import { WordChallenge } from '../models/word-chanllenge';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GameService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getLevelData(level: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/level/${level}/`);
  }
}

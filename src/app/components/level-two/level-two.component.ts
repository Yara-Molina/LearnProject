import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { WordChallenge } from '../../models/word-chanllenge';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class Level2Component implements OnInit {
  palabra: WordChallenge | null = null;
  correctLetter: string = '';
  userInput: string = '';
  clue: string = '';
  imagenUrl: string = '';

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPalabraNivel2();
  }

  obtenerPalabraNivel2(): void {
    this.gameService.getLevelData(2).subscribe((data) => {
      console.log(data);
      this.palabra = this.obtenerPalabraAleatoria(data);
      if (this.palabra) {
        this.correctLetter = this.palabra.anwser ?? '';
        this.clue = this.palabra.pista ?? '';
        this.imagenUrl = this.palabra.imagen_url ?? '';
      }
    });
  }

  obtenerPalabraAleatoria(palabras: WordChallenge[]): WordChallenge | null {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras.length > 0 ? palabras[indiceAleatorio] : null;
  }

  checkAnswer() {
    const userInputTrimmed = this.userInput.trim().toLowerCase();
    const correctLetterTrimmed = this.correctLetter.trim().toLowerCase();
    
    if (userInputTrimmed === correctLetterTrimmed) {
      alert('¡Correcto!');
    } else {
      alert('Intenta de nuevo');
    }
  }

  goToMenu() {
    this.router.navigate(['/']);
  }
}

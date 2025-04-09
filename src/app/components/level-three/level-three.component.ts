import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';
import { WordChallenge } from '../../models/word-chanllenge';  // Asegúrate de que esta ruta sea correcta
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-three',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class Level3Component implements OnInit {
  hint: string = '';
  correctWord: string = '';
  userInput: string = '';
  palabra: WordChallenge | null = null; 

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPalabraNivel3();
  }

  obtenerPalabraNivel3(): void {
    this.gameService.getLevelData(3).subscribe((data: WordChallenge[]) => {
      this.palabra = this.obtenerPalabraAleatoria(data);
      if (this.palabra) {
        this.correctWord = this.palabra.anwser ?? '';
        this.hint = this.palabra.pista ?? '';
      }
    });
  }

  obtenerPalabraAleatoria(palabras: WordChallenge[]): WordChallenge | null {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras.length > 0 ? palabras[indiceAleatorio] : null;
  }

  checkAnswer(): void {
    const userInputTrimmed = this.userInput.trim().toLowerCase();
    const correctWordTrimmed = this.correctWord.trim().toLowerCase();
    
    if (userInputTrimmed === correctWordTrimmed) {
      alert('¡Correcto!');
    } else {
      alert('Sigue intentando');
    }
  }

  goToMenu(): void {
    this.router.navigate(['/']);
  }
}

import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { WordChallenge } from '../../models/word-chanllenge';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  selector: 'app-palabra',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss'],
})
export class Level1Component implements OnInit {
  palabras: WordChallenge[] = [];
  palabra: WordChallenge | null = null;

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPalabra();
  }

  obtenerPalabra(): void {
    this.gameService.getLevelData(1).subscribe((data) => {
      this.palabras = data; 
      this.palabra = this.obtenerPalabraAleatoria();
      console.log('Palabra:', this.palabra);
      console.log('Imagen URL:', this.palabra?.imagen_url);
    });
  }

  obtenerPalabraAleatoria(): WordChallenge | null {
    const indiceAleatorio = Math.floor(Math.random() * this.palabras.length);
    return this.palabras.length > 0 ? this.palabras[indiceAleatorio] : null;
  }

  goToMenu() {
    this.router.navigate(['/']);
  }
}

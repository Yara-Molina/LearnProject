import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-level-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './level-two.component.html',
  styleUrl: './level-two.component.scss'
})

export class Level2Component implements OnInit {
  wordWithBlank = '';
  correctLetter = '';
  userInput = '';

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getLevelData(2).subscribe(data => {
      this.wordWithBlank = data.word_with_blank;
      this.correctLetter = data.answer;
    });
  }

  checkAnswer() {
    alert(this.userInput.toLowerCase() === this.correctLetter ? '¡Correcto!' : 'Intenta de nuevo');
  }

  goToMenu() {
    this.router.navigate(['/']);
  }
}

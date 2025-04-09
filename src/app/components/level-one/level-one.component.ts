import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './level-one.component.html',
  styleUrl: './level-one.component.scss'
})
export class Level1Component implements OnInit {
  imageUrl = '';
  question = '';
  options: string[] = [];
  correctAnswer = '';

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getLevelData(1).subscribe(data => {
      this.imageUrl = data.image;
      this.question = data.question;
      this.options = data.options;
      this.correctAnswer = data.answer;
    });
  }

  checkAnswer(option: string) {
    alert(option === this.correctAnswer ? '¡Correcto!' : 'Incorrecto');
  }

  goToMenu() {
    this.router.navigate(['/']);
  }
}

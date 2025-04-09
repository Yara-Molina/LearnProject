import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

// IMPORTS NECESARIOS
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-three',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './level-three.component.html',
  styleUrl: './level-three.component.scss'
})
export class Level3Component implements OnInit {
  hint = '';
  correctWord = '';
  userInput = '';

  constructor(
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getLevelData(3).subscribe(data => {
      this.hint = data.hint;
      this.correctWord = data.answer;
    });
  }

  checkAnswer() {
    alert(this.userInput.toLowerCase() === this.correctWord ? '¡Correcto!' : 'Sigue intentando');
  }

  goToMenu() {
    this.router.navigate(['/']);
  }
}

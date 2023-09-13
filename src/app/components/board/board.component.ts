import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  board : {}[] = []
  constructor(gameservice: GameService){
    this.board = gameservice.createBoard();
  }
}

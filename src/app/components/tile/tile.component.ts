import { Component } from '@angular/core';
import { GameComponent } from 'src/app/pages/game/game.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  
  buildingChoice = "HWY"
  constructor(gameState : GameComponent){
    // this.buildingChoice = gameState.buildingChoices[0]
  }


}

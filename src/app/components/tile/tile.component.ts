import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  
  buildingPlaced = ''

  constructor(private gameservice:GameService){
    // this.gameservice.getBuildingOption.subscribe(building => this.buildingPlaced = building)
  }
}

import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  
  @Input() tile: any;

  buildingPlaced = 'hi'

  constructor(private gameservice:GameService){
    // this.gameservice.getBuildingOption.subscribe(building => this.buildingPlaced = building)
  }
}

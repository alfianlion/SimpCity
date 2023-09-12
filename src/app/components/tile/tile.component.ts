import { Component } from '@angular/core';
import { BuildingSetUp, GameService } from 'src/app/game.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {
  buildingsAvailable : BuildingSetUp[]
  buildingPlaced = null;

  constructor(gameservice: GameService) {
    this.buildingsAvailable = gameservice.totalbuildings
  } 

  randomizedBuildings() : number {
    console.log(Math.floor(Math.random()*this.buildingsAvailable.length));    
    return Math.floor(Math.random()*this.buildingsAvailable.length)
    // return 0;
  }
}

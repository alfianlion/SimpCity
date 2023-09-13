import { Component } from '@angular/core';
import { BuildingSetUp, GameService } from 'src/app/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  buildingsAvailable : BuildingSetUp[]
  buildingPlaced = null
  public buildingChoices : string[] = []

  constructor(gameservice: GameService) {
    this.buildingsAvailable = gameservice.totalbuildings
  } 

  initGame(){
    this.buildingChoices = []
    this.buildingPlaced = null
  }

  newGame() : void {
    this.initGame()
    this.randomizedBuildings()
  }

  randomizedBuildings() : string[]{
    let firstRandomNumber = Math.floor(Math.random()*this.buildingsAvailable.length)
    let secondRandomNumber = Math.floor(Math.random()*this.buildingsAvailable.length)

    this.buildingChoices.push(this.buildingsAvailable[firstRandomNumber].building)   
    this.buildingChoices.push(this.buildingsAvailable[secondRandomNumber].building)

    this.removeBuildings(this.buildingChoices)

    return this.buildingChoices
  }

  removeBuildings(choices : string[]) : void {
    for (let i = 0; i < this.buildingsAvailable.length; i++) {
      for (let a = 0; a < choices.length; a++) {
        if (this.buildingsAvailable[i].building.includes(choices[a])) {
          this.buildingsAvailable[i].total --
        }        
      }
    }

    this.filterBuildings();

    console.log(choices);
    console.log(this.buildingsAvailable);
  }

  filterBuildings() : BuildingSetUp[] {
    for (let i  = 0; i < this.buildingsAvailable.length; i++) {
      if (this.buildingsAvailable[i].total <= 0) {
        this.buildingsAvailable.splice(i,1)
      }
    }
    return this.buildingsAvailable
  }
}

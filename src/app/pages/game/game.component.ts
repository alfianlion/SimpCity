import { Component } from '@angular/core';
import { BuildingSetUp, GameService } from 'src/app/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {
  buildingsAvailable : BuildingSetUp[]
  buildingPlaced = ''
  public buildingChoices : string[] = []

  constructor(private gameservice: GameService) {
    this.buildingsAvailable = gameservice.totalbuildings
    this.gameservice.getBuildingOption.subscribe(building => this.buildingPlaced = building)
  } 

  initGame(){
    this.buildingsAvailable = this.gameservice.resetBuildings()
    this.buildingChoices = []
    this.buildingPlaced = ''
    this.randomizedBuildings()
    this.setBuildingOption()
    this.removeBuildings(this.buildingChoices)
    this.filterBuildings();
  }

  newGame() : void {
    this.initGame()
  }

  selectedOption(building: string){
    // let selectState = true
    // while (selectState) {
      
    // }
    this.buildingPlaced = building
    this.buildingChoices = []
    this.randomizedBuildings()
    this.removeBuildings(this.buildingChoices)
    this.filterBuildings();
    this.setBuildingOption()
    console.log(`${building} selected`)
  }

  setBuildingOption(){
    console.log('Building Set');
    this.gameservice.setBuildingOption(this.buildingPlaced)
  }

  randomizedBuildings() : string[]{
    let firstRandomNumber = Math.floor(Math.random()*this.buildingsAvailable.length)
    let secondRandomNumber = Math.floor(Math.random()*this.buildingsAvailable.length)

    this.buildingChoices.push(this.buildingsAvailable[firstRandomNumber].building)   
    this.buildingChoices.push(this.buildingsAvailable[secondRandomNumber].building)

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

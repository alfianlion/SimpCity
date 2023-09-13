import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

export interface BuildingSetUp{
  building: string;
  total: number;
} 

export class GameService {

  public board = []
  private building = new BehaviorSubject('');
  getBuildingOption = this.building.asObservable()

  totalbuildings = [
    {building:"BCH", total:8},
    {building:"FAC", total:8},
    {building:"HSE", total:8},
    {building:"SHP", total:8},
    {building:"HWY", total:8},
  ]

  constructor() { }

  resetBuildings() : BuildingSetUp[]{
    return this.totalbuildings = [
      {building:"BCH", total:8},
      {building:"FAC", total:8},
      {building:"HSE", total:8},
      {building:"SHP", total:8},
      {building:"HWY", total:8},
    ]
  }

  setBuildingOption(building: string){
    this.building.next(building)
  }

  createBoard(){
    let board = [];
    for (let i = 0; i < 16; i++) {
      board.push({id: i, state:null})
    }
    console.log(board);
    
    return board
  }
}

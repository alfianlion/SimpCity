import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })

export interface BuildingSetUp{
  building: string;
  total: number;
} 

export class GameService {

  totalbuildings = [
    {building:"BCH", total:8},
    {building:"FAC", total:8},
    {building:"HSE", total:8},
    {building:"SHP", total:8},
    {building:"HWY", total:8},
  ]

  constructor() { }

}

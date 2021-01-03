import { Component, OnInit } from '@angular/core';
import {TileComponent} from '../tile/tile.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles = [
    new TileComponent(1,1,'#142A5C'),
    new TileComponent(1,1,'#B7A0E8'),
    new TileComponent(1,1,'#FF0000'),
    new TileComponent(1,1,'#D9EDD9'),
    new TileComponent(1,1,'#142A5C'),
    new TileComponent(1,1,'#B7A0E8'),
    new TileComponent(1,1,'#FF0000'),
    new TileComponent(1,1,'#D9EDD9'),
    new TileComponent(1,1,'#D9EDD9'),
  ];
  
  private getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  public changeColor(tile : any){
    tile.color = this.getRandomColor();

  }
  constructor() { }

  ngOnInit(): void {
  }

}

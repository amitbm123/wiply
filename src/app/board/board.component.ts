import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tiles = [
    {cols: 1, rows: 1, color: '#142A5C'},
    {cols: 1, rows: 1, color: '#B7A0E8'},
    {cols: 1, rows: 1, color: '#FF0000'},
    {cols: 1, rows: 1, color: '#D9EDD9'},
    {cols: 1, rows: 1, color: '#142A5C'},
    {cols: 1, rows: 1, color: '#B7A0E8'},
    {cols: 1, rows: 1, color: '#FF0000'},
    {cols: 1, rows: 1, color: '#D9EDD9'},
    {cols: 1, rows: 1, color: '#D9EDD9'},
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

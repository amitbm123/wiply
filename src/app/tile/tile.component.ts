import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})

export class TileComponent implements OnInit {
  id: String;
  cols: number;
  rows: number;
  color: String;

  constructor(@Inject(Number) cols: number, @Inject(Number) rows: number, color: String, id: String) { 
    this.cols = cols;
    this.rows = rows;
    this.color = color;
    this.id = id;
  }

  ngOnInit(): void {
  }

}

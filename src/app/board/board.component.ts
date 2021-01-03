import { Component, OnInit } from '@angular/core';
import {TileComponent} from '../tile/tile.component';
import { AngularFireDatabase } from '@angular/fire/database';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  colors : any[] = [];
  tiles : TileComponent[] = [];
  testEmitter$ = new BehaviorSubject<TileComponent[]>(this.tiles);

  constructor( db : AngularFireDatabase) {
    db.list('/colors').valueChanges().subscribe(colors => {
      this.colors = colors
      this.colors.forEach((color =>{
        this.tiles.push(new TileComponent(1,1,color));
      }));
      
      this.testEmitter$.next(this.tiles);
    });
    
    this.testEmitter$.subscribe((value) => this.tiles = value);
   }
  
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

  ngOnInit(): void {
  }

}

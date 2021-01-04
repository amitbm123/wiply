import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, DatabaseSnapshot, AngularFireAction } from '@angular/fire/database';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbPath = '/colors';
  tutorialsRef : AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
   }

  getSnapshotChanges(): Observable<AngularFireAction<DatabaseSnapshot<any>>[]> {
    return this.tutorialsRef.snapshotChanges();
  }

  updateColor(id : string, color : String) : void {
    this.db.database.ref(this.dbPath).update({[id] : color})
  }
}

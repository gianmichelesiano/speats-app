import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tutorial } from '../modules/tutorial/tutorial.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/tutorials';


  //tutorialsRef: AngularFireList<any>;
  tutorialsRef: AngularFireList<any>;
  tutorials: Observable<any[]>;

  constructor(db: AngularFireDatabase) { 
    this.tutorialsRef = db.list(this.dbPath);
    this.tutorials = this.tutorialsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  getAll(){
    return this.tutorials;
  }

  create(tutorial: Tutorial): any {
     this.tutorialsRef.push( tutorial ); 
  }

  update(key: string, value: any) {
     this.tutorialsRef.update(key, value);
  }

  delete(key: string){
     this.tutorialsRef.remove(key);
  }

  deleteAll(){
     this.tutorialsRef.remove();
  }
}

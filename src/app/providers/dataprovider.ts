import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class FirbaseDataProvider {

  constructor(private db:AngularFirestore) {
      
  }

  getDataList(list: string){
    return this.db.collection(list).valueChanges();
  }

}

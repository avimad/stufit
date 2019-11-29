import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { General } from 'src/app/models/general';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StufitService {

  constructor(private db: AngularFirestore) {
  }

  saveData(data: General) {
    return this.db.collection('record').doc('userdetail').set(data);
  }
}

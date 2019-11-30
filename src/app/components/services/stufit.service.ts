import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { General } from 'src/app/models/general';
import { generate } from 'rxjs';
import { Anthropometry, UserRecords } from 'src/app/models/stufit';

@Injectable({
  providedIn: 'root'
})
export class StufitService {

  constructor(private db: AngularFirestore) {
  }

  saveData(data: UserRecords) {
    return this.db.collection('userrecords').add(data);
  }

  getData() {
    return this.db.collection('userrecords').get();
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { General } from 'src/app/models/general';
import { generate } from 'rxjs';
import { Anthropometry } from 'src/app/models/stufit';

@Injectable({
  providedIn: 'root'
})
export class StufitService {

  constructor(private db: AngularFirestore) {
  }

  saveData(data: General) {
    return this.db.collection('userrecords').add(data);
  }
  saveAntropometry(doc, data: Anthropometry) {
    return this.db.collection('userrecords').doc(doc).collection('anthropo').add(data);
  }

  getData() {
    return this.db.collection('userrecords').get();
  }

}

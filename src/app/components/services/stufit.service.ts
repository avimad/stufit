import { Injectable, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { General } from 'src/app/models/general';
import { generate, Subject } from 'rxjs';
import { Anthropometry, UserRecords } from 'src/app/models/stufit';
import { STUFIT_CONFIG, StufitConfig } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class StufitService {

  public unsubscribe$ = new Subject<void>();

  constructor(private db: AngularFirestore,
    @Inject(STUFIT_CONFIG) private config: StufitConfig) {
  }

  saveData(data: UserRecords) {
    return this.db.collection(`${this.config.dbenv}`).doc('stufit').collection('userrecords').add(data);
  }

  getData() {
    return this.db.collection(`${this.config.dbenv}`).doc('stufit').collection('userrecords').get();
  }
  getDataById(id) {
    return this.db.collection(`${this.config.dbenv}`).doc('stufit').collection('userrecords').doc(id).get();
  }
  deleteRecord(id) {
    return this.db.collection(`${this.config.dbenv}`).doc('stufit').collection('userrecords').doc(id).delete();
  }

}

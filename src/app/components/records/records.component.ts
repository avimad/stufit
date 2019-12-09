import { Component, OnInit } from '@angular/core';
import { StufitService } from '../services/stufit.service';
import { GetRecord } from 'src/app/models/stufit';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  private records: GetRecord[] = [];
  private record: GetRecord = {};

  constructor(private service: StufitService, private pdfservice: PdfService) { }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.service.getData().subscribe(res => {
      res.docs.forEach(elem => {
        this.record = {};
        this.record.docId = elem.id;
        this.record.generalinfo = elem.data().generalinfo;
        this.records.push(this.record);

      });
      console.log(this.records);
    });
  }
  Download(id) {
    console.log(id);
    this.service.getDataById(id).subscribe(res => {
      this.pdfservice.makePdf(res.data());
    });
  }

}

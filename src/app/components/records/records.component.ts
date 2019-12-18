import { Component, OnInit } from '@angular/core';
import { StufitService } from '../services/stufit.service';
import { GetRecord } from 'src/app/models/stufit';
import { PdfService } from '../services/pdf.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  records: GetRecord[] = [];
  record: GetRecord = {};
  _sub = new Subject<void>();
  constructor(private service: StufitService, private pdfservice: PdfService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getRecords();
  }

  getRecords() {
    this.records = [];
    this.service.getData().pipe().subscribe(res => {
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

  deleteRecord(id) {
    this.service.deleteRecord(id).then(res => {
      this.toastr.success("Record deleted successfully");
      this.getRecords();
    })

  }

}

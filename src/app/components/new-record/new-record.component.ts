import { Component, OnInit } from '@angular/core';
import { General } from 'src/app/models/general';
import { StufitService } from '../services/stufit.service';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {

  general: General = {};

  constructor(private service: StufitService, private pdfService: PdfService) { }

  ngOnInit() {
  }

  save() {
    this.general.Name = 'Test';
    this.service.saveData(this.general).subscribe(res => {
      res.forEach(elem => {
        console.log(elem.payload.doc.data());
      });
    });
  }
  createPdf() {
    this.pdfService.makePdf();
  }


}

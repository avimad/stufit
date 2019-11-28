import { Component, OnInit, ViewChild } from '@angular/core';
import { General } from 'src/app/models/general';
import { StufitService } from '../services/stufit.service';
import { PdfService } from '../services/pdf.service';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { AnthropometryComponent } from '../anthropometry/anthropometry.component';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {

  general: General = {};
  @ViewChild(GeneralInfoComponent, { static: false }) generalInfoChild: GeneralInfoComponent;
  @ViewChild(AnthropometryComponent, { static: false }) anthropometryChild: AnthropometryComponent;
  constructor(private service: StufitService, private pdfService: PdfService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.generalInfoChild.getData());
    // this.general.Name = 'Test';
    // this.service.saveData(this.general).subscribe(res => {
    //   res.forEach(elem => {
    //     console.log(elem.payload.doc.data());
    //   });
    // });
  }
  createPdf() {
    this.pdfService.makePdf();
  }


}

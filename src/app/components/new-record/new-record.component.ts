import { Component, OnInit, ViewChild } from '@angular/core';
import { General } from 'src/app/models/general';
import { StufitService } from '../services/stufit.service';
import { PdfService } from '../services/pdf.service';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { AnthropometryComponent } from '../anthropometry/anthropometry.component';
import { AudiomentryComponent } from '../audiomentry/audiomentry.component';
import { NutritionalComponent } from '../nutritional/nutritional.component';
import { PschycologicalComponent } from '../pschycological/pschycological.component';
import { GeneralAssessment, UserRecords } from 'src/app/models/stufit';
import { EyevisionComponent } from '../eyevision/eyevision.component';
import { DentaloralComponent } from '../dentaloral/dentaloral.component';
import { GeneralAssesmentComponent } from '../general-assesment/general-assesment.component';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss']
})
export class NewRecordComponent implements OnInit {

  data: UserRecords = {};

  @ViewChild(GeneralInfoComponent, { static: false }) generalInfoChild: GeneralInfoComponent;
  @ViewChild(AnthropometryComponent, { static: false }) anthropometryChild: AnthropometryComponent;

  @ViewChild(EyevisionComponent, { static: false }) eyevisionyChild: EyevisionComponent;
  @ViewChild(DentaloralComponent, { static: false }) dentaloralChild: DentaloralComponent;
  @ViewChild(AudiomentryComponent, { static: false }) audiometryChild: AudiomentryComponent;
  @ViewChild(NutritionalComponent, { static: false }) nutritionalChild: NutritionalComponent;
  @ViewChild(PschycologicalComponent, { static: false }) pschycologicalChild: PschycologicalComponent;
  @ViewChild(GeneralAssesmentComponent, { static: false }) assesmentChild: GeneralAssesmentComponent;

  constructor(private service: StufitService, private pdfService: PdfService) { }

  ngOnInit() {
    this.service.getData().subscribe(res => {
      console.log(res);
    });
  }

  save() {
    console.log(this.generalInfoChild.getData(), this.anthropometryChild.getData());
    this.data.generalinfo = this.generalInfoChild.getData();
    this.data.anthropometry = this.anthropometryChild.getData();
    this.data.eyevision = this.eyevisionyChild.

    const data = this.generalInfoChild.getData();
    this.service.saveData(data).then(res => {

      console.log(res.id);
      this.service.saveAntropometry(res.id, this.anthropometryChild.getData()).then();

    });
  }
  createPdf() {
    this.pdfService.makePdf();
  }


}

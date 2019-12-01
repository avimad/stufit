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
import { ToastrService } from 'ngx-toastr';

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

  constructor(private service: StufitService, private pdfService: PdfService, private notification: ToastrService) { }

  ngOnInit() {
    this.service.getData().subscribe(res => {
      console.log(res.docs[1].data());
    });
  }

  save() {
    this.data.generalinfo = this.generalInfoChild.getData();
    this.data.anthropometry = this.anthropometryChild.getData();
    this.data.eyevision = this.eyevisionyChild.getData();
    this.data.dentaloral = this.dentaloralChild.getData();
    this.data.audiometry = this.audiometryChild.getData();
    this.data.nutritional = this.nutritionalChild.getData();
    this.data.pschycological = this.pschycologicalChild.getData();
    this.data.generalassesment = this.assesmentChild.getData();
    this.service.saveData(this.data).then(res => {
      this.notification.success('Record added successfully');
    });
  }
  createPdf() {
    this.pdfService.makePdf(this.generalInfoChild.getData());
  }


}

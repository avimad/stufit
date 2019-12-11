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
  }

  save() {
    if (this.generalInfoChild.generalForm.valid &&
      this.anthropometryChild.anhthropometryForm.valid &&
      this.eyevisionyChild.eyevisionForm.valid &&
      this.dentaloralChild.dentalForm.valid &&
      this.audiometryChild.audiometryForm.valid &&
      this.nutritionalChild.nutritionalassessmentForm.valid &&
      this.pschycologicalChild.pschycologicalForm.valid &&
      this.assesmentChild.generalassessmentForm.valid) {

      this.data.generalinfo = this.generalInfoChild.getData();
      this.data.anthropometry = this.anthropometryChild.getData();
      this.data.eyevision = this.eyevisionyChild.getData();
      this.data.dentaloral = this.dentaloralChild.getData();
      this.data.audiometry = this.audiometryChild.getData();
      this.data.nutritional = this.nutritionalChild.getData();
      this.data.pschycological = this.pschycologicalChild.getData();
      this.data.generalassesment = this.assesmentChild.getData();
      this.service.saveData(this.data).then(res => {
        this.pdfService.makePdf(this.data);
        this.notification.success('Record added successfully');
      });
    } else {
      this.notification.error('Please fill all required fields');
    }
  }
  createPdf() {
    this.pdfService.makePdf(this.data);
  }


}

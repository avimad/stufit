import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GeneralAssessment } from 'src/app/models/stufit';

@Component({
  selector: 'app-general-assesment',
  templateUrl: './general-assesment.component.html',
  styleUrls: ['./general-assesment.component.scss']
})
export class GeneralAssesmentComponent implements OnInit {

  generalassessmentForm: FormGroup;
  model: GeneralAssessment = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.generalassessmentForm = this.fb.group({
      chestauscultation: [''],
      abdomenpalpitation: [''],
      activeinfectious: [''],
      cleftlip: [''],
      clubfoot: [''],
      congenitalcataract: [''],
      congenitaldeafness: [''],
      congenitalheart: [''],
      skincondition: [''],
      otitis: [''],
      neuromotor: [''],
      bodytype: [''],
      advice: [''],
      remarks: ['']

    });
    this.generalassessmentForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): GeneralAssessment {
    this.model = {};
    const res = this.generalassessmentForm.controls;
    this.model.Chestauscultation = res.chestauscultation.value;
    this.model.Abdomenpalpitation = res.abdomenpalpitation.value;
    this.model.Activeinfectious = res.activeinfectious.value;
    this.model.Cleftlip = res.cleftlip.value;
    this.model.Clubfoot = res.clubfoot.value;
    this.model.Congenitalcataract = res.congenitalcataract.value;
    this.model.Congenitaldeafness = res.congenitaldeafness.value;
    this.model.Congenitalheart = res.congenitalheart.value;
    this.model.Skincondition = res.skincondition.value;
    this.model.Otitis = res.otitis.value;
    this.model.Neuromotor = res.neuromotor.value;
    this.model.Bodytype = res.bodytype.value;
    this.model.Advice = res.advice.value;
    this.model.Remarks = res.remarks.value;

    return this.model;
  }
}

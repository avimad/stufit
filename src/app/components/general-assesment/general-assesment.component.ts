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
      chestauscultation: ['', Validators.required],
      abdomenpalpitation: ['', Validators.required],
      activeinfectious: ['', Validators.required],
      cleftlip: ['', Validators.required],
      clubfoot: ['', Validators.required],
      congenitalcataract: ['', Validators.required],
      congenitaldeafness: ['', Validators.required],
      congenitalheart: ['', Validators.required],
      skincondition: ['', Validators.required],
      otitis: ['', Validators.required],
      neuromotor: ['', Validators.required],
      bodytype: ['', Validators.required],
      advice: [''],
      remarks: ['']

    });
    this.generalassessmentForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): GeneralAssessment {
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

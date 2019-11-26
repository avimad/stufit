import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-general-assesment',
  templateUrl: './general-assesment.component.html',
  styleUrls: ['./general-assesment.component.scss']
})
export class GeneralAssesmentComponent implements OnInit {

  generalassessmentForm: FormGroup;
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
      congenitalheart:[''],
      skincondition:[''],
      otitis:[''],
      neuromotor:[''],
      bodytype:[''],
      advice:[''],
      remarks:['']

    });
    this.generalassessmentForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

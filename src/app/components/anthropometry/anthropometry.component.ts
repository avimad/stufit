import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-anthropometry',
  templateUrl: './anthropometry.component.html',
  styleUrls: ['./anthropometry.component.scss']
})
export class AnthropometryComponent implements OnInit {

  anhthropometryForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.anhthropometryForm = this.fb.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
      bmi: [''],
      bloodpressure: [''],
      pulserate: [''],
      posture: [''],
      shoulderrange: [''],
      neckrange: [''],
      rtlegrange: [''],
      ltlegrange: [''],
      dystrophy: [''],
      atrophy: [''],
      stamina: [''],
      endurance: [''],
      pain: [''],
      painposition: [''],
      paintype: [''],
      spasm: [''],
      spasmposition: [''],
      advice: [''],
      remarks: ['']
    });
    this.anhthropometryForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dentaloral',
  templateUrl: './dentaloral.component.html',
  styleUrls: ['./dentaloral.component.scss']
})
export class DentaloralComponent implements OnInit {
  dentalForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.dentalForm = this.fb.group({
      periodontal: [''],
      dentalCaries: [''],
      periodontal2: [''],
      orthodontic: [''],
      extration: [''],
      spacemaintainer: [''],
      oralhygiene: [''],
      sugarintake: [''],
      timebrushed: [''],
      thumbsucking: [''],
      malpositioned: [''],
      dentalflourosis: [''],
      missingteeth: [''],
      incisors: [''],
      canines: [''],
      premolars: [''],
      molars: [''],
      deciduousteeth: [''],
      advice: [''],
      remarks: ['']
    });
    this.dentalForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

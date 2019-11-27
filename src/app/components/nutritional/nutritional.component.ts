import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nutritional',
  templateUrl: './nutritional.component.html',
  styleUrls: ['./nutritional.component.scss']
})
export class NutritionalComponent implements OnInit {
  nutritionalassessmentForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.nutritionalassessmentForm = this.fb.group({
      Select: [''],
      vitamina: [''],
      vitamind: [''],
      obesity: [''],
      idealbodyweight: [''],
      idealcaloriesestimation: [''],
      fats: [''],
      cabohydrates: [''],
      proteins: [''],
      fluidestimation: [''],
      glasses: [''],
      advice: [''],
      remarks: ['']
    });
    this.nutritionalassessmentForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

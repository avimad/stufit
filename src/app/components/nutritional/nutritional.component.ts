import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Nutritional } from 'src/app/models/stufit';

@Component({
  selector: 'app-nutritional',
  templateUrl: './nutritional.component.html',
  styleUrls: ['./nutritional.component.scss']
})
export class NutritionalComponent implements OnInit {
  nutritionalassessmentForm: FormGroup;
  model: Nutritional = {};
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

  getData(): Nutritional {
    const res = this.nutritionalassessmentForm.controls;
    this.model.Main = res.Select.value;
    this.model.Vitamina = res.vitamina.value;
    this.model.Vitamind = res.vitamind.value;
    this.model.Obesity = res.obesity.value;
    this.model.Idealbodyweight = res.idealbodyweight.value;
    this.model.Idealcaloriesestimation = res.idealcaloriesestimation.value;
    this.model.Fats = res.fats.value;
    this.model.Cabohydrates = res.cabohydrates.value;
    this.model.Proteins = res.proteins.value;
    this.model.Fluidestimation = res.fluidestimation.value;
    this.model.Glasses = res.glasses.value;
    this.model.Advice = res.advice.value;
    this.model.Remarks = res.remarks.value;

    return this.model;
  }

}

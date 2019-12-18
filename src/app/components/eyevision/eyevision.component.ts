import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EyeVision } from 'src/app/models/stufit';

@Component({
  selector: 'app-eyevision',
  templateUrl: './eyevision.component.html',
  styleUrls: ['./eyevision.component.scss']
})
export class EyevisionComponent implements OnInit {

  eyevisionForm: FormGroup;
  model: EyeVision = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.eyevisionForm = this.fb.group({
      visionlteye: [''],
      visionrteye: [''],
      visionremark: [''],
      refractionlteye: [''],
      refractionrteye: [''],
      refractionremark: [''],
      colourvisionlteye: [''],
      colourvisionrteye: [''],
      colourvisionremark: [''],
      diseaselteye: [''],
      diseaserteye: [''],
      diseaseremark: [''],
      squintlteye: [''],
      squintrteye: [''],
      squintremark: [''],
      microeyeballlteye: [''],
      microeyeballrteye: [''],
      microeyeballremark: [''],
      ptosislteye: [''],
      ptosisrteye: [''],
      ptosisremark: [''],
      nystgmuslteye: [''],
      nystgmusrteye: [''],
      nystgmusremark: [''],

      advice: [''],
      remarks: ['']
    });
    this.eyevisionForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): EyeVision {
    this.model = {};
    const res = this.eyevisionForm.controls;
    this.model.Visionlteye = res.visionlteye.value;
    this.model.Visionrteye = res.visionrteye.value;
    this.model.Visionremark = res.visionremark.value;
    this.model.Refractionlteye = res.refractionlteye.value;
    this.model.Refractionrteye = res.refractionrteye.value;
    this.model.Refractionremark = res.refractionremark.value;
    this.model.Colourvisionlteye = res.colourvisionlteye.value;
    this.model.Colourvisionrteye = res.colourvisionrteye.value;
    this.model.Colourvisionremark = res.colourvisionremark.value;
    this.model.Diseaselteye = res.diseaselteye.value;
    this.model.Diseaserteye = res.diseaserteye.value;
    this.model.Diseaseremark = res.diseaseremark.value;
    this.model.Squintlteye = res.squintlteye.value;
    this.model.Squintrteye = res.squintrteye.value;
    this.model.Squintremark = res.squintremark.value;
    this.model.Microeyeballlteye = res.microeyeballlteye.value;
    this.model.Microeyeballrteye = res.microeyeballrteye.value;
    this.model.Microeyeballremark = res.microeyeballremark.value;
    this.model.Ptosislteye = res.ptosislteye.value;
    this.model.Ptosisrteye = res.ptosisrteye.value;
    this.model.Ptosisremark = res.ptosisremark.value;
    this.model.Nystgmuslteye = res.nystgmuslteye.value;
    this.model.Nystgmusrteye = res.nystgmusrteye.value;
    this.model.Nystgmusremark = res.nystgmusremark.value;

    this.model.advice = res.advice.value;
    this.model.remarks = res.remarks.value;
    return this.model;
  }

}

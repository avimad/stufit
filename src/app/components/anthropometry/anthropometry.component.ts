import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Anthropometry } from 'src/app/models/stufit';

@Component({
  selector: 'app-anthropometry',
  templateUrl: './anthropometry.component.html',
  styleUrls: ['./anthropometry.component.scss']
})
export class AnthropometryComponent implements OnInit {

  anhthropometryForm: FormGroup;
  model: Anthropometry = {};
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.anhthropometryForm = this.fb.group({
      height: [""],
      weight: [""],
      bmi: [""],
      bloodpressure: [""],
      pulserate: [""],
      posture: [""],
      shoulderrange: [""],
      neckrange: [""],
      rtlegrange: [""],
      ltlegrange: [""],
      dystrophy: [""],
      atrophy: [""],
      stamina: [""],
      endurance: [""],
      pain: [""],
      painposition: [""],
      paintype: [""],
      spasm: [""],
      spasmposition: [""],
      advice: [""],
      remarks: [""]
    });
    this.anhthropometryForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): Anthropometry {
    this.model = {};
    const res = this.anhthropometryForm.controls;
    this.model.Height = res.height.value;
    this.model.Advice = res.advice.value;
    this.model.Atrophy = res.atrophy.value;
    this.model.Bloodpressure = res.bloodpressure.value;
    this.model.Bmi = res.bmi.value;
    this.model.Dystrophy = res.dystrophy.value;
    this.model.Endurance = res.endurance.value;
    this.model.Ltlegrange = res.ltlegrange.value;
    this.model.Neckrange = res.neckrange.value;
    this.model.Pain = res.pain.value;
    this.model.Painposition = res.painposition.value;
    this.model.Paintype = res.paintype.value;
    this.model.Posture = res.posture.value;
    this.model.Pulserate = res.pulserate.value;
    this.model.Remarks = res.remarks.value;
    this.model.Rtlegrange = res.rtlegrange.value;
    this.model.Shoulderrange = res.shoulderrange.value;
    this.model.Spasm = res.spasm.value;
    this.model.Spasmposition = res.spasmposition.value;
    this.model.Stamina = res.stamina.value;
    this.model.Weight = res.weight.value;

    return this.model;

  }

}

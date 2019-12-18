import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DentalOral } from "src/app/models/stufit";

@Component({
  selector: "app-dentaloral",
  templateUrl: "./dentaloral.component.html",
  styleUrls: ["./dentaloral.component.scss"]
})
export class DentaloralComponent implements OnInit {
  dentalForm: FormGroup;
  model: DentalOral = {};

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.dentalForm = this.fb.group({
      periodontal: [""],
      dentalCaries: [""],
      periodontal2: [""],
      orthodontic: [""],
      extration: [""],
      spacemaintainer: [""],
      oralhygiene: [""],
      sugarintake: [""],
      timebrushed: [""],
      thumbsucking: [""],
      malpositioned: [""],
      dentalflourosis: [""],
      missingteeth: [""],
      incisors: [""],
      canines: [""],
      premolars: [""],
      molars: [""],
      deciduousteeth: [""],
      advice: [""],
      remarks: [""]
    });
    this.dentalForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): DentalOral {
    this.model = {};
    const res = this.dentalForm.controls;
    this.model.Periodontal = res.periodontal.value;
    this.model.DentalCaries = res.dentalCaries.value;
    this.model.Periodontal2 = res.periodontal2.value;
    this.model.Orthodontic = res.oralhygiene.value;
    this.model.Extration = res.extration.value;
    this.model.Spacemaintainer = res.spacemaintainer.value;
    this.model.Oralhygiene = res.oralhygiene.value;
    this.model.Sugarintake = res.sugarintake.value;
    this.model.Timebrushed = res.timebrushed.value;
    this.model.Thumbsucking = res.thumbsucking.value;
    this.model.Malpositioned = res.malpositioned.value;
    this.model.Dentalflourosis = res.dentalflourosis.value;
    this.model.Missingteeth = res.missingteeth.value;
    this.model.Incisors = res.incisors.value;
    this.model.Canines = res.canines.value;
    this.model.Premolars = res.premolars.value;
    this.model.Molars = res.molars.value;
    this.model.Deciduousteeth = res.deciduousteeth.value;
    this.model.Advice = res.advice.value;
    this.model.Remarks = res.remarks.value;

    return this.model;
  }
}

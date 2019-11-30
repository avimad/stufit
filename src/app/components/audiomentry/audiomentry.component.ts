import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Audiometry } from 'src/app/models/stufit';

@Component({
  selector: "app-audiomentry",
  templateUrl: "./audiomentry.component.html",
  styleUrls: ["./audiomentry.component.scss"]
})
export class AudiomentryComponent implements OnInit {
  audiometryForm: FormGroup;
  model: Audiometry = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.audiometryForm = this.fb.group({
      speechmilestones: [''],
      comprehension: [''],
      expression: [''],
      modeofcommunication: [''],
      auditoryskills: [''],
      parentsopinion: [''],
      hearingloss: [''],
      tinnitus: [''],
      lteperiodontal: [''],
      rteperiodontal: [''],
      respondonname: [''],
      hearingassessment: [''],
      blwax: [''],
      medicalhistory: [''],
      advice: [''],
      remarks: ['']






    });

    this.audiometryForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

  getData(): Audiometry {
    const res = this.audiometryForm.controls;
    this.model.Speechmilestones = res.speechmilestones.value;
    this.model.Comprehension = res.comprehension.value;
    this.model.Expression = res.expression.value;
    this.model.Modeofcommunication = res.modeofcommunication.value;
    this.model.Auditoryskills = res.auditoryskills.value;
    this.model.Parentsopinion = res.parentsopinion.value;
    this.model.Hearingloss = res.hearingloss.value;
    this.model.Tinnitus = res.tinnitus.value;
    this.model.Lteperiodontal = res.lteperiodontal.value;
    this.model.Rteperiodontal = res.rteperiodontal.value;
    this.model.Respondonname = res.respondonname.value;
    this.model.Hearingassessment = res.hearingassessment.value;
    this.model.Blwax = res.blwax.value;
    this.model.Medicalhistory = res.medicalhistory.value;
    this.model.Advice = res.advice.value;
    this.model.Remarks = res.remarks.value;
    return this.model;

  }

}

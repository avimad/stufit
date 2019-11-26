import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-audiomentry",
  templateUrl: "./audiomentry.component.html",
  styleUrls: ["./audiomentry.component.scss"]
})
export class AudiomentryComponent implements OnInit {
  audiometryForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.audiometryForm = this.fb.group({
      speechmilestones:[''],
      comprehension:[''],
      expression:[''],
      modeofcommunication:[''],
      auditoryskills:[''],
      parentsopinion:[''],
      hearingloss:[''],
      tinnitus:[''],
      lteperiodontal:[''],
      rteperiodontal:[''],
      respondonname:[''],
      hearingassessment:[''],
      blwax:[''],
      medicalhistory:[''],
      advice:[''],
      remarks:['']






    });

    this.audiometryForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }
}

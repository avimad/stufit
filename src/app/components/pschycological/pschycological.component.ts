import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pschycological',
  templateUrl: './pschycological.component.html',
  styleUrls: ['./pschycological.component.scss']
})
export class PschycologicalComponent implements OnInit {

  pschycologicalForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.pschycologicalForm = this.fb.group({
      behaviordisorder: [''],
      learningdisorder: [''],
      attentiondeficit: [''],
      depression: [''],
      anxiety: [''],
      eatingdisorder: [''],
      phobia: [''],
      videogame: [''],
      internetaddiction: [''],
      socialanxiety: [''],
      schizophrenia: [''],
      sleepdisorder: [''],
      substanceabuse: [''],
      delayinmenstruation: [''],
      irregularperiods: [''],
      painduringmenstruation: [''],
      painorburning: [''],
      advice: [''],
      remarks: ['']

    });
    this.pschycologicalForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }
}

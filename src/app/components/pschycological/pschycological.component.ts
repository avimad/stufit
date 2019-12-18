import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Pschycological } from 'src/app/models/stufit';

@Component({
  selector: 'app-pschycological',
  templateUrl: './pschycological.component.html',
  styleUrls: ['./pschycological.component.scss']
})
export class PschycologicalComponent implements OnInit {

  pschycologicalForm: FormGroup;
  model: Pschycological = {};
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

  getData(): Pschycological {
    this.model = {};
    const res = this.pschycologicalForm.controls;
    this.model.Behaviordisorder = res.behaviordisorder.value;
    this.model.Learningdisorder = res.learningdisorder.value;
    this.model.Attentiondeficit = res.attentiondeficit.value;
    this.model.Depression = res.depression.value;
    this.model.Anxiety = res.anxiety.value;
    this.model.Eatingdisorder = res.eatingdisorder.value;
    this.model.Phobia = res.phobia.value;
    this.model.Videogame = res.videogame.value;
    this.model.Internetaddiction = res.internetaddiction.value;
    this.model.Socialanxiety = res.socialanxiety.value;
    this.model.Schizophrenia = res.schizophrenia.value;
    this.model.Sleepdisorder = res.sleepdisorder.value;
    this.model.Substanceabuse = res.substanceabuse.value;
    this.model.Delayinmenstruation = res.delayinmenstruation.value;
    this.model.Irregularperiods = res.irregularperiods.value;
    this.model.Painduringmenstruation = res.painduringmenstruation.value;
    this.model.Painorburning = res.painorburning.value;
    this.model.Advice = res.advice.value;
    this.model.Remarks = res.remarks.value;

    return this.model;
}

}

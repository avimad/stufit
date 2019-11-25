import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eyevision',
  templateUrl: './eyevision.component.html',
  styleUrls: ['./eyevision.component.scss']
})
export class EyevisionComponent implements OnInit {

  eyevisionForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.eyevisionForm = this.fb.group({
      visionlteye: [null],
      visionrteye: [null],
      visionremark: [null],
      refractionlteye: [null],
      refractionrteye: [null],
      refractionremark: [null],
      colourvisionlteye: [null],
      colourvisionrteye: [null],
      colourvisionremark: [null],
      diseaselteye: [null],
      diseaserteye: [null],
      diseaseremark: [null],
      squintlteye: [null],
      squintrteye: [null],
      squintremark: [null],
      microeyeballlteye: [null],
      microeyeballrteye: [null],
      microeyeballremark: [null],
      ptosislteye: [null],
      ptosisrteye: [null],
      ptosisremark: [null],
      nystgmuslteye: [null],
      nystgmusrteye: [null],
      nystgmusremark: [null],

      advice: [''],
      remarks: ['']
    });
    this.eyevisionForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

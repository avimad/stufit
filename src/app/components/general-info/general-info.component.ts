import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PdfService } from '../services/pdf.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  generalForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.generalForm = this.fb.group({
      name: ['', Validators.required],
      stufitId: ['', Validators.required],
      mothername: [''],
      fathername: [''],
      dob: [''],
      address: [''],
      email: [''],
      contactno: [''],
      fathercontact: [''],
      mothercontact: [''],
      sibling1: [''],
      sibling1class: [''],
      sibling2: [''],
      sibling2class: ['']
    });
    this.generalForm.valueChanges.subscribe(res => {
      console.log(res);
    });
  }

}

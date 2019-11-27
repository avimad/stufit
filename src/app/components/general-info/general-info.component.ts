import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralInfo } from 'src/app/models/stufit';
import { StufitService } from '../services/stufit.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  generalForm: FormGroup;
  model: GeneralInfo = {};
  constructor(private fb: FormBuilder, private service: StufitService) { }

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

      console.log(this.model);
    });
  }

  saveGeneralInfo() {
    const res = this.generalForm.controls;
    this.model.Name = res.name.value;
    this.model.Address = res.address.value;
    this.model.DOB = res.dob.value;
    this.model.Email = res.email.value;
    this.model.FatherName = res.fathername.value;
    this.model.FatherPhone = res.fathercontact.value;
    this.model.MotherName = res.mothername.value;
    this.model.MotherPhone = res.mothercontact.value;
    this.model.StufitID = res.stufitId.value;

    this.model.Siblings = [];
    this.model.Siblings.push({ class: res.sibling1.value, sec: res.sibling1class.value });
    this.model.Siblings.push({ class: res.sibling2.value, sec: res.sibling2class.value });

    console.log(this.model);

  }

}

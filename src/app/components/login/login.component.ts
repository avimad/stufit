import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private firebase: AngularFireAuth) { }
  loginForm: FormGroup;
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(e) {
    console.log(this.loginForm.value);
    this.firebase.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(res => {
      res.user.getIdToken().then(console.log);
    });
  }

}

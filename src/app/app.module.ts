import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewRecordComponent } from './components/new-record/new-record.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatRadioModule, MatTableModule
} from '@angular/material';
import { ToastrModule } from 'ngx-toastr';


import { GeneralInfoComponent } from './components/general-info/general-info.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { AnthropometryComponent } from './components/anthropometry/anthropometry.component';
import { EyevisionComponent } from './components/eyevision/eyevision.component';
import { DentaloralComponent } from './components/dentaloral/dentaloral.component';
import { AudiomentryComponent } from './components/audiomentry/audiomentry.component';
import { NutritionalComponent } from './components/nutritional/nutritional.component';
import { PschycologicalComponent } from './components/pschycological/pschycological.component';
import { GeneralAssesmentComponent } from './components/general-assesment/general-assesment.component';
import { LoginComponent } from './components/login/login.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'add-record', component: NewRecordComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    DashboardComponent,
    NewRecordComponent,
    GeneralInfoComponent,
    AnthropometryComponent,
    EyevisionComponent,
    DentaloralComponent,
    AudiomentryComponent,
    NutritionalComponent,
    PschycologicalComponent,
    GeneralAssesmentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatStepperModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

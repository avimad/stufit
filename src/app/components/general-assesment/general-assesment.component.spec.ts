import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAssesmentComponent } from './general-assesment.component';

describe('GeneralAssesmentComponent', () => {
  let component: GeneralAssesmentComponent;
  let fixture: ComponentFixture<GeneralAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

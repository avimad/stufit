import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentaloralComponent } from './dentaloral.component';

describe('DentaloralComponent', () => {
  let component: DentaloralComponent;
  let fixture: ComponentFixture<DentaloralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentaloralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentaloralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

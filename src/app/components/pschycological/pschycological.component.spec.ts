import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PschycologicalComponent } from './pschycological.component';

describe('PschycologicalComponent', () => {
  let component: PschycologicalComponent;
  let fixture: ComponentFixture<PschycologicalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PschycologicalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PschycologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

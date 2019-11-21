import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalComponent } from './nutritional.component';

describe('NutritionalComponent', () => {
  let component: NutritionalComponent;
  let fixture: ComponentFixture<NutritionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

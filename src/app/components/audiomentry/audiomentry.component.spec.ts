import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiomentryComponent } from './audiomentry.component';

describe('AudiomentryComponent', () => {
  let component: AudiomentryComponent;
  let fixture: ComponentFixture<AudiomentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiomentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiomentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

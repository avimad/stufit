import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EyevisionComponent } from './eyevision.component';

describe('EyevisionComponent', () => {
  let component: EyevisionComponent;
  let fixture: ComponentFixture<EyevisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EyevisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EyevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

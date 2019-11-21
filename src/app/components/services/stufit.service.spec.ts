import { TestBed } from '@angular/core/testing';

import { StufitService } from './stufit.service';

describe('StufitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StufitService = TestBed.get(StufitService);
    expect(service).toBeTruthy();
  });
});

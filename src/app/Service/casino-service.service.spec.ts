import { TestBed } from '@angular/core/testing';

import { CasinoServiceService } from './casino-service.service';

describe('CasinoServiceService', () => {
  let service: CasinoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasinoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MultiBitRateService } from './multi-bit-rate.service';

describe('MultiBitRateService', () => {
  let service: MultiBitRateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiBitRateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

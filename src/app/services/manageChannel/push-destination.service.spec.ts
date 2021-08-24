import { TestBed } from '@angular/core/testing';

import { PushDestinationService } from './push-destination.service';

describe('PushDestinationService', () => {
  let service: PushDestinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushDestinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

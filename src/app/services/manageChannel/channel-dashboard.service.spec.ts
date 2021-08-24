import { TestBed } from '@angular/core/testing';

import { ChannelDashboardService } from './channel-dashboard.service';

describe('ChannelDashboardService', () => {
  let service: ChannelDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

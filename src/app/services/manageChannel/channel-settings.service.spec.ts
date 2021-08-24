import { TestBed } from '@angular/core/testing';

import { ChannelSettingsService } from './channel-settings.service';

describe('ChannelSettingsService', () => {
  let service: ChannelSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

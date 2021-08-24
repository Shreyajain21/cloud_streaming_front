import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlsRecordingComponent } from './hls-recording.component';

describe('HlsRecordingComponent', () => {
  let component: HlsRecordingComponent;
  let fixture: ComponentFixture<HlsRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlsRecordingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlsRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

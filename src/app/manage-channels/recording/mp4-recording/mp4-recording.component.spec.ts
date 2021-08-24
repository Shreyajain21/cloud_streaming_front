import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp4RecordingComponent } from './mp4-recording.component';

describe('Mp4RecordingComponent', () => {
  let component: Mp4RecordingComponent;
  let fixture: ComponentFixture<Mp4RecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp4RecordingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp4RecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

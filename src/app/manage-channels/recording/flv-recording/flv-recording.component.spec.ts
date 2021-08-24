import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlvRecordingComponent } from './flv-recording.component';

describe('FlvRecordingComponent', () => {
  let component: FlvRecordingComponent;
  let fixture: ComponentFixture<FlvRecordingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlvRecordingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlvRecordingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

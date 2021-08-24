import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRecordedFilesComponent } from './conference-recorded-files.component';

describe('ConferenceRecordedFilesComponent', () => {
  let component: ConferenceRecordedFilesComponent;
  let fixture: ComponentFixture<ConferenceRecordedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRecordedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceRecordedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

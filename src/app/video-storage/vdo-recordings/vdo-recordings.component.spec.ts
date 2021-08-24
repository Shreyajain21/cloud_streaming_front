import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VdoRecordingsComponent } from './vdo-recordings.component';

describe('VdoRecordingsComponent', () => {
  let component: VdoRecordingsComponent;
  let fixture: ComponentFixture<VdoRecordingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VdoRecordingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VdoRecordingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

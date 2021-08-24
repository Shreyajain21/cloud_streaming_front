import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedFilesComponent } from './recorded-files.component';

describe('RecordedFilesComponent', () => {
  let component: RecordedFilesComponent;
  let fixture: ComponentFixture<RecordedFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordedFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

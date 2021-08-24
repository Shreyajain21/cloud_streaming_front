import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmtpSettingsComponent } from './rmtp-settings.component';

describe('RmtpSettingsComponent', () => {
  let component: RmtpSettingsComponent;
  let fixture: ComponentFixture<RmtpSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmtpSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmtpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HlsSettingsComponent } from './hls-settings.component';

describe('HlsSettingsComponent', () => {
  let component: HlsSettingsComponent;
  let fixture: ComponentFixture<HlsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HlsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HlsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAlertsComponent } from './social-alerts.component';

describe('SocialAlertsComponent', () => {
  let component: SocialAlertsComponent;
  let fixture: ComponentFixture<SocialAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

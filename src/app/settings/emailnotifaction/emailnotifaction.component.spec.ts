import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailnotifactionComponent } from './emailnotifaction.component';

describe('EmailnotifactionComponent', () => {
  let component: EmailnotifactionComponent;
  let fixture: ComponentFixture<EmailnotifactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailnotifactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailnotifactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

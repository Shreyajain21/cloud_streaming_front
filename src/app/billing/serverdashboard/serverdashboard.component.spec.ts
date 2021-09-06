import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerdashboardComponent } from './serverdashboard.component';

describe('ServerdashboardComponent', () => {
  let component: ServerdashboardComponent;
  let fixture: ComponentFixture<ServerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

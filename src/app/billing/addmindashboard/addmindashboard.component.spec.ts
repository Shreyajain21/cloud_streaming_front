import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmindashboardComponent } from './addmindashboard.component';

describe('AddmindashboardComponent', () => {
  let component: AddmindashboardComponent;
  let fixture: ComponentFixture<AddmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

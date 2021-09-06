import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emailnot2Component } from './emailnot2.component';

describe('Emailnot2Component', () => {
  let component: Emailnot2Component;
  let fixture: ComponentFixture<Emailnot2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Emailnot2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Emailnot2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesDueComponent } from './invoices-due.component';

describe('InvoicesDueComponent', () => {
  let component: InvoicesDueComponent;
  let fixture: ComponentFixture<InvoicesDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerdasComponent } from './serverdas.component';

describe('ServerdasComponent', () => {
  let component: ServerdasComponent;
  let fixture: ComponentFixture<ServerdasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerdasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

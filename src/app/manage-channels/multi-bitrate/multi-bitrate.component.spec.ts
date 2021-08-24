import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiBitrateComponent } from './multi-bitrate.component';

describe('MultiBitrateComponent', () => {
  let component: MultiBitrateComponent;
  let fixture: ComponentFixture<MultiBitrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiBitrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiBitrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

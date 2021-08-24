import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePresetComponent } from './update-preset.component';

describe('UpdatePresetComponent', () => {
  let component: UpdatePresetComponent;
  let fixture: ComponentFixture<UpdatePresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscodingComponent } from './transcoding.component';

describe('TranscodingComponent', () => {
  let component: TranscodingComponent;
  let fixture: ComponentFixture<TranscodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranscodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

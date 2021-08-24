import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashchannelListComponent } from './dashchannel-list.component';

describe('DashchannelListComponent', () => {
  let component: DashchannelListComponent;
  let fixture: ComponentFixture<DashchannelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashchannelListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashchannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

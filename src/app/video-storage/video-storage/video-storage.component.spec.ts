import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoStorageComponent } from './video-storage.component';

describe('VideoStorageComponent', () => {
  let component: VideoStorageComponent;
  let fixture: ComponentFixture<VideoStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

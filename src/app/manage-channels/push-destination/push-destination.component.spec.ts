import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PushDestinationComponent } from './push-destination.component';

describe('PushDestinationComponent', () => {
  let component: PushDestinationComponent;
  let fixture: ComponentFixture<PushDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PushDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PushDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

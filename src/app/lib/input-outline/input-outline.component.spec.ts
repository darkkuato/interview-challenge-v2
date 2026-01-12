import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOutlineComponent } from './input-outline.component';

describe('InputOutlineComponent', () => {
  let component: InputOutlineComponent;
  let fixture: ComponentFixture<InputOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputOutlineComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

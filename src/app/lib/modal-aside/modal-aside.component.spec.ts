import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAsideComponent } from './modal-aside.component';

describe('ModalAsideComponent', () => {
  let component: ModalAsideComponent;
  let fixture: ComponentFixture<ModalAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

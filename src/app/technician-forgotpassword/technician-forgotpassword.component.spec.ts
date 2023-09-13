import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianForgotpasswordComponent } from './technician-forgotpassword.component';

describe('TechnicianForgotpasswordComponent', () => {
  let component: TechnicianForgotpasswordComponent;
  let fixture: ComponentFixture<TechnicianForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianForgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

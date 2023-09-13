import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianRegistrationComponent } from './technician-registration.component';

describe('TechnicianRegistrationComponent', () => {
  let component: TechnicianRegistrationComponent;
  let fixture: ComponentFixture<TechnicianRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

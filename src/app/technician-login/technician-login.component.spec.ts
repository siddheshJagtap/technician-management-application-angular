import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianLoginComponent } from './technician-login.component';

describe('TechnicianLoginComponent', () => {
  let component: TechnicianLoginComponent;
  let fixture: ComponentFixture<TechnicianLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

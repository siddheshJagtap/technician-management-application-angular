import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUpdatesuccessComponent } from './password-updatesuccess.component';

describe('PasswordUpdatesuccessComponent', () => {
  let component: PasswordUpdatesuccessComponent;
  let fixture: ComponentFixture<PasswordUpdatesuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordUpdatesuccessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordUpdatesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

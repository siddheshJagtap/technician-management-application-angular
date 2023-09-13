import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianSearchComponent } from './technician-search.component';

describe('TechnicianSearchComponent', () => {
  let component: TechnicianSearchComponent;
  let fixture: ComponentFixture<TechnicianSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicianSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

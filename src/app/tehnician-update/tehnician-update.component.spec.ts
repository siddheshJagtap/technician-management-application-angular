import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TehnicianUpdateComponent } from './tehnician-update.component';

describe('TehnicianUpdateComponent', () => {
  let component: TehnicianUpdateComponent;
  let fixture: ComponentFixture<TehnicianUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TehnicianUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TehnicianUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

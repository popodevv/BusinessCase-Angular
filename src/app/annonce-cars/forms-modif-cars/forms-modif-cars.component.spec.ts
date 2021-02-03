import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModifCarsComponent } from './forms-modif-cars.component';

describe('FormsModifCarsComponent', () => {
  let component: FormsModifCarsComponent;
  let fixture: ComponentFixture<FormsModifCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModifCarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModifCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

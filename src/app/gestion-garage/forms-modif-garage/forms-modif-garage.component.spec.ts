import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModifGarageComponent } from './forms-modif-garage.component';

describe('FormsModifGarageComponent', () => {
  let component: FormsModifGarageComponent;
  let fixture: ComponentFixture<FormsModifGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModifGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModifGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

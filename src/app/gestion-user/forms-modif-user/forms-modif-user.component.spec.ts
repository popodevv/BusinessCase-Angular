import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModifUserComponent } from './forms-modif-user.component';

describe('FormsModifUserComponent', () => {
  let component: FormsModifUserComponent;
  let fixture: ComponentFixture<FormsModifUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsModifUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsModifUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

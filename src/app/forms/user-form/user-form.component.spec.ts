import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should retrieve valid array from ViolationList if empty', () => {
    // Check if no Violation => empty array.
    component.violationList = null;
    const errorMessages = component.retrieveErrors('firstName');
    expect(errorMessages).toEqual([]);
  });

  it('should retrieve valid array from ViolationList if error in first name field', () => {
    // Check if no Violation => empty array.
    component.violationList = {
      '@type': '',
      '@context': '',
      'hydra:description': '',
      'hydra:title': '',
      violations: [
        {propertyPath: 'firstName', message: 'Error', code: ''},
        {propertyPath: 'firstName', message: 'Error', code: ''},
        {propertyPath: 'firstName', message: 'Error', code: ''},
        {propertyPath: 'lastName', message: 'Error', code: ''},
      ],
    };
    const errorMessages = component.retrieveErrors('firstName');
    expect(errorMessages.length).toEqual(3);
    expect(errorMessages[0]).toEqual('Error');
  });
});

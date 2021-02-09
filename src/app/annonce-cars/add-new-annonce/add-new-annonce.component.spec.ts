import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewAnnonceComponent } from './add-new-annonce.component';

describe('AddNewAnnonceComponent', () => {
  let component: AddNewAnnonceComponent;
  let fixture: ComponentFixture<AddNewAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

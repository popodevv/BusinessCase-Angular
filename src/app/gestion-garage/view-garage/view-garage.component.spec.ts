import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGarageComponent } from './view-garage.component';

describe('ViewGarageComponent', () => {
  let component: ViewGarageComponent;
  let fixture: ComponentFixture<ViewGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewGarageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

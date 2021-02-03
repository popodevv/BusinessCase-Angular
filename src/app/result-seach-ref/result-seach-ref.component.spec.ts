import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultSeachRefComponent } from './result-seach-ref.component';

describe('ResultSeachRefComponent', () => {
  let component: ResultSeachRefComponent;
  let fixture: ComponentFixture<ResultSeachRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultSeachRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultSeachRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

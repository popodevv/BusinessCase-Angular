import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnnonceComponent } from './view-annnonce.component';

describe('ViewAnnnonceComponent', () => {
  let component: ViewAnnnonceComponent;
  let fixture: ComponentFixture<ViewAnnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAnnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

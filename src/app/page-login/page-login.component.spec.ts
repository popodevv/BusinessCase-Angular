import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PageLoginComponent } from './page-login.component';

describe('PageLoginComponent', () => {
  let component: PageLoginComponent;
  let fixture: ComponentFixture<PageLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ 
        PageLoginComponent, 
      ],
    }).compileComponents();
  });


  it('sould create the app', () => {
    const fixture = TestBed.createComponent(PageLoginComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testformangular'`, () => {
    const fixture = TestBed.createComponent(PageLoginComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testformangular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(PageLoginComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('testformangular app is running!');
  });

});

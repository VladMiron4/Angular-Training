import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponentViewComponent } from './login-component-view.component';

describe('LoginComponentViewComponent', () => {
  let component: LoginComponentViewComponent;
  let fixture: ComponentFixture<LoginComponentViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponentViewComponent]
    });
    fixture = TestBed.createComponent(LoginComponentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAccountComponent } from './auth-account.component';

describe('AuthAccountComponent', () => {
  let component: AuthAccountComponent;
  let fixture: ComponentFixture<AuthAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpayComponent } from './finalpay.component';

describe('FinalpayComponent', () => {
  let component: FinalpayComponent;
  let fixture: ComponentFixture<FinalpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalpayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

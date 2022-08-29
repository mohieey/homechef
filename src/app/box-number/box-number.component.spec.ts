import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNumberComponent } from './box-number.component';

describe('BoxNumberComponent', () => {
  let component: BoxNumberComponent;
  let fixture: ComponentFixture<BoxNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

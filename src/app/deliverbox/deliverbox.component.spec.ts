import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverboxComponent } from './deliverbox.component';

describe('DeliverboxComponent', () => {
  let component: DeliverboxComponent;
  let fixture: ComponentFixture<DeliverboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliverboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

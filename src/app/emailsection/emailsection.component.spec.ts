import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsectionComponent } from './emailsection.component';

describe('EmailsectionComponent', () => {
  let component: EmailsectionComponent;
  let fixture: ComponentFixture<EmailsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

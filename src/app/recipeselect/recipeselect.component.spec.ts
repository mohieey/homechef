import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeselectComponent } from './recipeselect.component';

describe('RecipeselectComponent', () => {
  let component: RecipeselectComponent;
  let fixture: ComponentFixture<RecipeselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

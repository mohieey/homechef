import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipeselect',
  templateUrl: './recipeselect.component.html',
  styleUrls: ['./recipeselect.component.css']
})
export class RecipeselectComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  regestrationRecipeForm=this.fb.group({
    freshRecipes:[''],
    pripRecipes:[''],
    calorieConscious:[''],
    carbConscious:[''],
  })

  ngOnInit(): void {
  }

}

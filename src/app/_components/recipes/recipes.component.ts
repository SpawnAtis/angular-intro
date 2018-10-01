import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  detailCollapsed = false;
  selectedRecipe: Recipe;

  toggleRecipesDetail(recipe: Recipe) {
    this.selectedRecipe = recipe;
    if (recipe === this.selectedRecipe) {
      this.detailCollapsed = !this.detailCollapsed;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

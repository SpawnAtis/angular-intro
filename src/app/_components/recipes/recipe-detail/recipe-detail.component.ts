import { RecipeService } from './../../../shared/services/recipe.service';
import { Recipe } from '../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  handleAddToShoppingList(event: Event) {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

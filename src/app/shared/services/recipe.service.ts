import { ShoppingListService } from './shopping-list.service';
import { Recipe } from '../models/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Burger',
      'tasty',
      'https://c8.alamy.com/comp/PB838E/buchimgaekorean-pancake-PB838E.jpg',
      [
        new Ingredient('Bred', 1),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe(
      2,
      'Chicken',
      'funny',
      'https://c8.alamy.com/comp/PB838E/buchimgaekorean-pancake-PB838E.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('spices', 3),
      ]
    )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(recipeID: number) {
    const recipe  = this.recipes.find(( { id } ) => {
      return recipeID === id;
    });
    return recipe;
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

import { RecipeService } from './../../../shared/services/recipe.service';
import { Recipe } from '../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const recipeID = +this.route.snapshot.params.id;
    // this.recipe = this.recipeService.getRecipeById(recipeID);
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.getRecipeById(+params.id);
    });
  }

  handleAddToShoppingList(event: Event) {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}

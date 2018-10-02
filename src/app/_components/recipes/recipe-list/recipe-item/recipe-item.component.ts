import { RecipeService } from './../../../../shared/services/recipe.service';
import { Recipe } from '../../../../shared/models/recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  handleSelect() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}

import { ShoppingListService } from './../../shared/services/shopping-list.service';
import { Ingredient } from './../../shared/models/ingredient.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe((newIngredients: Ingredient[]) => {
        this.ingredients = newIngredients;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

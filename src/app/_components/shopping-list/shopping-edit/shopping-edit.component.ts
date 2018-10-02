import { ShoppingListService } from './../../../shared/services/shopping-list.service';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { Component, ViewChild, OnInit, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputNameRef') nameRef: ElementRef;
  @ViewChild('inputAmountRef') amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  handleDeleteItem() {

  }

  handleAddItem() {
   const ingridient = new Ingredient(
     this.nameRef.nativeElement.value,
     this.amountRef.nativeElement.value
   );
   this.shoppingListService.addIngredient(ingridient);
  }

  handleClearFields() {
    this.amountRef.nativeElement.value = '';
    this.nameRef.nativeElement.value = '';
  }

}

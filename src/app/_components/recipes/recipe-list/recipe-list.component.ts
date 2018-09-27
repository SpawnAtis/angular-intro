import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(
      'dasd',
      'test',
      'https://c8.alamy.com/comp/PB838E/buchimgaekorean-pancake-PB838E.jpg'
    ),
    new Recipe(
      'dasd',
      'test',
      'https://c8.alamy.com/comp/PB838E/buchimgaekorean-pancake-PB838E.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
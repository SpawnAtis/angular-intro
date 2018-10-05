import { FeatureRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_components/layout/header/header.component';
import { RecipesComponent } from './_components/recipes/recipes.component';
import { RecipeListComponent } from './_components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './_components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './_components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './_components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './_components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './_components/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './_components/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

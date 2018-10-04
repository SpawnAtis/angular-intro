import { RecipeDetailComponent } from './_components/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './_components/shopping-list/shopping-list.component';
import { RecipesComponent } from './_components/recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      {
        path: ':id',
        component: RecipeDetailComponent
      }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  // { path: '**', component:  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:"",
    component:CardComponent
  },
  {
    path:"recipe",
    component:RecipeComponent
  },
  {
    path:"search",
    component:SearchComponent
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

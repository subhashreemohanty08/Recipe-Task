import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  fetchedRecipeDisplay:any=[];

  constructor(private recipeService:RecipeService) {

   }

  ngOnInit(): void {
    this.load();
  }
load(){
  this.fetchedRecipeDisplay=this.recipeService.fetchedRecipeDisplay 
}
}

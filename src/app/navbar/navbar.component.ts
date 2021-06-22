import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  key:string="" ;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }
fetchRecipe():void{
  this.recipeService.fetchResultsByKey(this.key);
}
}

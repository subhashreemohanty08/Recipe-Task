import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }
  cardDisplay:any=[];

  ngOnInit(): void {
    this.recipeService.card().subscribe((result)=>{
      console.log(result);
      this.cardDisplay=result.results; 
    }) 
  }

}

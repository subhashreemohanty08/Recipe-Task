import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient,private route:Router) { } 

  recipeApiUrl=`https://api.edamam.com/api/recipes/v2?type=public&app_id=8e14ec6c&app_key=9f24d6d8412a330ffc5daa384845e2f3&q=burger`;
  fetchRecipeApiUrl="" ;
  intFetchedData:Observable<any> | undefined 
  fetchedRecipeDisplay:any=[];

  card():Observable<any>
  {
    return this.http.get(this.recipeApiUrl)
  }
  recipe():Observable<any>
  {
    return this.http.get(this.recipeApiUrl)
  } 

  fetchResultsByKey(key:any): void{
  
   
    this.fetchRecipeApiUrl = `https://api.edamam.com/api/recipes/v2?type=public&app_id=8e14ec6c&app_key=9f24d6d8412a330ffc5daa384845e2f3&q=${key}burger`;
    this.intFetchedData = this.http.get(this.fetchRecipeApiUrl);
    this.intFetchedData.subscribe((result)=>{
    
      this.fetchedRecipeDisplay = result.response.docs; 
      
      this.route.navigate(["search"])
    })
  }
}

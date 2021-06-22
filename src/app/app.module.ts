import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule}from "@angular/common/http";
import { RecipeService } from './recipe.service';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    NavbarComponent,
    RecipeComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RecipeService], 
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

  private recipeSelected: Recipe = new Recipe("Zwiebelrostbraten", "Steffen", "https://github.com/KorbinianKuhn/angular/blob/master/src/assets/img/zwiebelrostbraten.jpeg?raw=true", "Zart-mürbes Fleisch, geröstete Zwiebeln, eine delikate Soße: Ein guter Zwiebelrostbraten ist unwiderstehlich!");

  constructor() { }

  ngOnInit() {
  }

}

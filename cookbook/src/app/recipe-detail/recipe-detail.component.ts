import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styles: []
})
export class RecipeDetailComponent implements OnInit {

  private recipeSelected: Recipe = new Recipe("Zwiebelrostbraten", "Steffen", "https://www.stuttgart-tourist.de/images/3/9/o/w/l/g/h/6/b/l/c/-/05b94880e745fdc0a6b79610d0b74cb1.jpeg", "Zart-mürbes Fleisch, geröstete Zwiebeln, eine delikate Soße: Ein guter Zwiebelrostbraten ist unwiderstehlich!");

  constructor() { }

  ngOnInit() {
  }

}

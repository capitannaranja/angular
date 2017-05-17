import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RecipeService } from "app/recipe.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styles: []
})
export class RecipeCreateComponent implements OnInit {
  private myForm: FormGroup;
  
  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      imageUrl: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      instruction: new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    let recipe = new Recipe(
      this.myForm.get("name").value,
      this.myForm.get("author").value,
      this.myForm.get("imageUrl").value,
      this.myForm.get("instruction").value
    )

    this.recipeService.addRecipe(recipe);

    this.router.navigate(['/','overview']);
  }

}

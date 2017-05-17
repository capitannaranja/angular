import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styles: []
})
export class RecipeCreateComponent implements OnInit {
  private myForm: FormGroup;
  
  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(null),
      imageUrl: new FormControl(null),
      author: new FormControl(null),
      instruction: new FormControl(null)
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }

}

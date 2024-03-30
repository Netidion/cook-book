import { Component } from "@angular/core";
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test description', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];

  constructor() {  }

  onInit() {}
}

import {Component, OnInit} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";

@Component({
  selector: "shopping-list",
  templateUrl:"./shopping-list.component.html",
  styleUrl:"./shopping-list.component.css"
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Eggs", 2),
    new Ingredient("Milk", 1),
    new Ingredient("Onions", 1),
    new Ingredient("Zucchini", 1),
    new Ingredient("Corn", 1),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

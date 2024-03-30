import {Component, OnInit} from "@angular/core";
import {Ingredient} from "../models/ingredient.model";

@Component({
  selector: "shopping-list",
  templateUrl:"./shopping-list.component.html",
  styleUrl:"./shopping-list.component.css"
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Eggs", 2, "pieces"),
    new Ingredient("Milk", 100, "gr"),
    new Ingredient("Onions", 1, "pieces"),
    new Ingredient("Zucchini", 5,"pieces"),
    new Ingredient("Corn", 1, "pieces"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

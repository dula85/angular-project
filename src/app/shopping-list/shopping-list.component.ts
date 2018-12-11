import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]=[
    new Ingredient({name: 'Apple', amount:5}),
    new Ingredient({name: 'Banana', amount:2})
  ];
  constructor() { }

  ngOnInit() {
  }

}

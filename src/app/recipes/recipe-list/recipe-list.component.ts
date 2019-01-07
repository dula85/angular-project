import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';
import {  } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe({name:'Recipe One', 
    description: 'This is a description one',
    imagePath: 'http://static.kidspot.com.au/recipe_asset/680/3416.jpg-20170509055134~q75,dx720y432u1r1gg,c--.jpg'}),
    new Recipe({name:'Recipe Two', 
    description: 'This is a description two',
    imagePath: 'http://static.kidspot.com.au/recipe_asset/680/3416.jpg-20170509055134~q75,dx720y432u1r1gg,c--.jpg'})
  ];
  @Output() selectedRecipeItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe:Recipe){
    console.log('recipe-list');
    this.selectedRecipeItem.emit(recipe);
  }

}

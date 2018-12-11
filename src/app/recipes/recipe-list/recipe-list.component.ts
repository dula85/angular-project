import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe({name:'Recipe One', 
    description: 'This is a description',
    imagePath: 'http://static.kidspot.com.au/recipe_asset/680/3416.jpg-20170509055134~q75,dx720y432u1r1gg,c--.jpg'}),
    new Recipe({name:'Recipe One', 
    description: 'This is a description',
    imagePath: 'http://static.kidspot.com.au/recipe_asset/680/3416.jpg-20170509055134~q75,dx720y432u1r1gg,c--.jpg'})
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';


@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html'
})
export class RecipesComponent{
    recipeItem:Recipe;

    OnSelectedRecipeItem(recipeItem:Recipe){
        console.log('recipes');
        this.recipeItem = recipeItem;
    }

}
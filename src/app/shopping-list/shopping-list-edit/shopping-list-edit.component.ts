import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild  } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() shoppingItem = new EventEmitter<Ingredient>();
  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    let newIngredient = new Ingredient({name: this.nameInput.nativeElement.value, 
      amount: this.amountInput.nativeElement.value});
    this.shoppingItem.emit(newIngredient);
  }

}

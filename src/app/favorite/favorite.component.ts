import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  
/*   inputs: ['isFavorite']        //vs
  @Input() isFavorite?: boolean; */
  // decorateive function for input 
  // @Input is decorator
  // @input is use for making feilds and properties as input properties

  //@Input('is-Favorite') isFavorite: boolean =true;

  
  isFavorite!: boolean;
  @Output() change = new EventEmitter();  //NOTE THAT THE EVENT SHOULD BE PLACED HERE TO CREATE MORE CLEARITY
  
  //HERE IS THE ALIAS @Input('is-favorite') <---
  @Input() isSelected?: boolean;
  title="This is from FAVORUITE COMPOTNENT"
  x="something"
   



  constructor() { }

  changeONclick(){
  }

  ngOnInit(): void {
  }
  onClickF(){
    //console.log(this.isFavorite)
    this.isSelected =!this.isSelected;
    this.change.emit()
  }


}

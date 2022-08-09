import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  // decorateive function for input 
  // @Input is decorator
  // @input is use for making feilds and properties as input properties

  //@Input() isFavorite?: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  onFavoriteChange(){
    //console.log("Woah Its working",this.isFavorite )
    //this.isFavorite=!this.isFavorite //IF PRESSED TRUE
  }

}

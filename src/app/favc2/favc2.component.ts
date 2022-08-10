import { Component, EventEmitter, Input, OnInit,Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favc2',
  templateUrl: './favc2.component.html',
  styles:['.funTime{ color:black; background:red}'],
  styleUrls: ['./favc2.component.css'], // LEACTURER SAID HERE IS WHAT STYLE IT WILL FINALLY DECIDE BUT I FOUND REVERSE TO BE TRUE ON CHROME
  //encapsulation:ViewEncapsulation.Emulated //DOESNT WORK
  encapsulation: ViewEncapsulation.ShadowDom // SHADOWDOM

  // THE ONLY GOOD USE CASE I CAN SEE REGARDING VIEWENCAPUSLATION IS THAT IT ENCLOSES THE STYLE TO A COMPONENT
})


//WHEN IT COMES TO INJECTING OR CHANGING STYLES WHATEVER COMES LAST WILL BE EFFECTIVE 
//THIS   styles:['.funTime{ color:black; background:red}'], VS styleUrls: ['./favc2.component.css'] styles seems to be OVERRITING
//YOU CAN ALSO APPLY STYLES INTO THE CLASSIC HMTL <STYLES> </STYLES>



export class Favc2Component implements OnInit {

  @Input('isFavorite') isSelected2!: boolean;
  @Output('Whatever') onChangeS = new EventEmitter();   

  constructor() { }
  
  ngOnInit(): void {
    //SHADOW DOM ALLOWS TO APPLY SCOPED STYLE 

  }
  onClickX(){
    this.isSelected2 =!this.isSelected2;
    this.onChangeS.emit({newValue:this.isSelected2});
  }

}

import { Component } from '@angular/core';
import { EventArgsBoolean} from 'src/app/event-args-boolean' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'section5ReUseableComponents';

  // WILL NEED HELP WITH THIS 
  post={
    title:"TittlefromApp",
    isFavorite: true,
  }

  //THIS ONE IS IDEAL

 //RECIVED A OBJECT MESSY
  onFavoriteChanged(eventArgs:{newValue: any}){
    console.log("OBJECT IS: ", eventArgs);
  }

  //THIS ONE USES A PARAMETER WITH TYPE IMPORTANT TO BE ACCURATE WITH TYPES PAST THE : 
  onFavoriteChanged2(isFavorite:boolean){
 
    console.log("using the value from ARRAY",isFavorite); 
  }


   //THIS IS THE BEST WAY TO DO IT MAKES 3 FILES BUT THINGS ARE MEGA CLEAR EXPECT MAYBE IN THE INTERFACE CLASS
   onFavoriteChanged3(eventArgs:EventArgsBoolean){
    console.log("OBJECT IS: ", eventArgs);
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  




}



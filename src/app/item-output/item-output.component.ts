import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  template:'',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {

  @Output() newItemEvent= new EventEmitter();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

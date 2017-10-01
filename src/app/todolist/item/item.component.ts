import {Component, Input} from '@angular/core';
import {Item} from '../item';
import {TodolistService} from '../todolist.service';

@Component({
  selector   : 'app-item',
  templateUrl: './item.component.html',
  styleUrls  : ['./item.component.css']
})
export class ItemComponent {

  @Input()
  public item: Item;

  constructor(public list: TodolistService) {
  }

}

import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../item';
import {TodolistService} from '../todolist.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  @Input()
  public item: Item;

  public list: TodolistService;

  constructor(list: TodolistService) {
    this.list = list;

  }

}

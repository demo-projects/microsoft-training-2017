
import {Item} from './item';


export class TodolistService {
  public items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(title: string) {
    this.items.push(new Item(title));
  }

  removeItem(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}

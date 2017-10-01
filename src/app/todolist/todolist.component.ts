import {Component} from '@angular/core';
import {Item} from './item';

@Component({
  selector: 'app-todolist',
  template: `
    <section class="todoapp">

      <app-header [title]="appTitle"
                  (itemAdded)="addItem($event)"></app-header>

      <app-main>
        <app-list [items]="items"></app-list>
      </app-main>

      <app-footer></app-footer>
    </section>
  `,
  styles  : []
})
export class TodolistComponent {

  public appTitle: string;
  public items: Item[];

  constructor() {
    this.appTitle = 'TODOAPP';
    this.items    = [];
  }

  addItem(title: string) {
    this.items.push(new Item(title));
  }


}

import {Component} from '@angular/core';
import {Item} from './item';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
  providers   : [TodolistService],
  template: `
    <section class="todoapp">

      <app-header [title]="appTitle"
                  (itemAdded)="list.addItem($event)"></app-header>

      <app-main>
        <app-list [items]="list.items"></app-list>
      </app-main>

      <app-footer></app-footer>
    </section>
  `,
  styles  : []
})
export class TodolistComponent {

  public appTitle: string;

  constructor(public list: TodolistService) {
    this.appTitle = 'TODOAPP';
  }
}

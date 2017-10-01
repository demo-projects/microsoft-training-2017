import {Component, OnInit, OnDestroy} from '@angular/core';
import {Item} from './item';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-todolist',
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
export class TodolistComponent  {

  public appTitle: string;
  public list: TodolistService;

  constructor(list: TodolistService) {
    this.appTitle = 'TODOAPP';
    this.list = list;

  }



}

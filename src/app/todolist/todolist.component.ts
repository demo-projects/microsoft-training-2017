import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodolistService} from './todolist.service';

@Component({
  selector : 'app-todolist',
  providers: [TodolistService],
  template : `
    <section class="todoapp">

      <app-header [title]="appTitle"
                  (itemAdded)="list.addItem($event)"></app-header>

      <app-main>
        <app-list [items]="list.items"></app-list>
      </app-main>

      <app-footer [count]="list.items | countBy:'completed':false"></app-footer>
    </section>
  `,
  styles   : []
})
export class TodolistComponent implements OnInit {

  public appTitle: string;

  constructor(public list: TodolistService, private route: ActivatedRoute) {
    this.appTitle = 'TODOAPP';
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe( p => console.log(p) );
  }
}

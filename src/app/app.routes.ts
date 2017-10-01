import {Routes} from '@angular/router';
import {HistoryComponent} from './history/history/history.component';
import {LoginComponent} from './login/login/login.component';
import {TodolistComponent} from './todolist/todolist.component';

export const routes: Routes = [
  {
    path     : '',
    component: LoginComponent
  },
  {
    path     : 'list',
    component: TodolistComponent
  },
  {
    path     : 'history',
    component: HistoryComponent
  },
];

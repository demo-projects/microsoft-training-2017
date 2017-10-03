import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path     : '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path     : 'list',
    loadChildren: './todolist/todolist.module#TodolistModule'
  },
  {
    path     : 'history',
    loadChildren: './history/history.module#HistoryModule'
  },
];

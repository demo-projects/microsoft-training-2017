import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';
import {MainComponent} from './main/main.component';
import {TodolistComponent} from './todolist.component';

@NgModule({
  imports     : [CommonModule],
  providers   : [],
  declarations: [
    TodolistComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    ItemComponent
  ],
  exports     : [TodolistComponent]
})
export class TodolistModule {
}

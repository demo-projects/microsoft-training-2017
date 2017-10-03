import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {LoginModule} from './login/login.module';
import {HistoryModule} from './history/history.module';
import {RouterModule} from '@angular/router';
import {routes} from './app.routes';
import { MarkerDirective } from './marker.directive';
import { IfDirective } from './if.directive';
import { UpperPipe } from './upper.pipe';

@NgModule({
  declarations: [AppComponent, MarkerDirective, IfDirective, UpperPipe],
  imports     : [
    BrowserModule,
    TodolistModule,
    LoginModule,
    HistoryModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor(title: Title) {
    title.setTitle('MY APP');
  }
}

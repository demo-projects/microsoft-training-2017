import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TodolistModule} from './todolist/todolist.module';
import {LoginModule} from './login/login.module';
import {HistoryModule} from './history/history.module';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    TodolistModule,
    LoginModule,
    HistoryModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {
}

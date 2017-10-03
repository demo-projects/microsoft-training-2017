import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Router} from '@angular/router';
import {routes} from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  bootstrap   : [AppComponent]
})

export class AppModule {

  constructor(router: Router) {
    router.events.subscribe( e => console.log(e) );
  }

}

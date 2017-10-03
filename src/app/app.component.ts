import {Component} from '@angular/core';
import {DataProviderService} from './data-provider.service';

@Component({
  selector: 'app-root',
  template: `
    <h1 appMarker="red">
      {{ dao.getData() | upper }}
    </h1>
  `
})
export class AppComponent {
  public dao: DataProviderService;

  constructor(dao: DataProviderService) {
    this.dao = dao;
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class DataProviderService {

  getData() {
    return 'Hello Angular';
  }
}

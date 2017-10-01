import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  private store;

  constructor() {
    this.store = localStorage;
  }

  public set(key: string, value: any): void {
    const _value = JSON.stringify(value);
    this.store.setItem(key, _value);
  }

  get(key: string): any {
    return JSON.parse(this.store.getItem(key));
  }

}

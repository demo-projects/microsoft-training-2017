import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StorageService} from '../ms-core/storage.service';
import {Item} from './item';
import {environment} from '../../environments/environment.prod';

@Injectable()
export class TodolistService {
  private _items: Item[];
  private _store: StorageService;

  constructor(store: StorageService, http: HttpClient) {
    this._store = store;
    this._items = store.get('LIST') || [];

    // fetch data from server using Builtin HttpClient
    http.get<Item[]>('https://jsonplaceholder.typicode.com/todos')
        .subscribe(result => this._items = result);
  }

  public get items(): Item[] {
    return this._items;
  }

  addItem(title: string): void {
    // immutable array for OnPush
    this._items = [...this._items, new Item(title)];

    // this._items.push(new Item(title));
    this._store.set('LIST', this.items);
  }

  removeItem(item: Item): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
  }

  toggleCompleted(item: Item) {
    // =>  [ {completed: } ]
  }
}

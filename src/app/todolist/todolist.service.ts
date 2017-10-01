import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {StorageService} from '../ms-core/storage.service';
import {Item} from './item';
import {LogService} from '../ms-core/log.service';

@Injectable()
export class TodolistService {
  private _items: Item[];
  private _store: StorageService;
  private log: LogService;

  constructor(store: StorageService, http: HttpClient, log: LogService) {
    this._store = store;
    this.log    = log;
    this._items = store.get('LIST') || [];

    // fetch data from server using Builtin HttpClient
    // http.get<Item[]>('https://jsonplaceholder.typicode.com/todos')
    //     .subscribe(result => this._items = result);
  }

  public get items(): Item[] {
    return this._items;
  }

  addItem(title: string): void {
    // immutable array for OnPush
    this._items = [...this._items, new Item(title)];
    this.log.createEntry(`item added: ${title}`);

    // this._items.push(new Item(title));
    this._store.set('LIST', this.items);
  }

  removeItem(item: Item): void {
    const index = this._items.indexOf(item);
    this._items.splice(index, 1);
    this.log.createEntry(`item removed: ${item.title}`);
  }

  toggleCompleted(item: Item) {
    // =>  [ {completed: } ]
  }
}

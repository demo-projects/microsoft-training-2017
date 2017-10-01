import {Injectable} from '@angular/core';
import {StorageService} from '../ms-core/storage.service';
import {Item} from './item';

@Injectable()
export class TodolistService {
  private _items: Item[];
  private _store: StorageService;

  constructor(store: StorageService) {
    this._store = store;
    this._items = store.get('LIST') || [];
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

}

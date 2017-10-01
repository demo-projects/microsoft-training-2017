import {Injectable} from '@angular/core';
import {StorageService} from '../ms-core/storage.service';
import {Item} from './item';

@Injectable()
export class TodolistService {
  private _items: Item[];
  private _store: StorageService;

  constructor(store: StorageService) {
    this._store = store;
    this._items =  store.get('LIST') || [];
  }

  public get items(): Item[] {
    return this._items;
  }

  addItem(title: string): void {
    this._items.push(new Item(title));
    this._store.set('LIST', this.items);
  }

}

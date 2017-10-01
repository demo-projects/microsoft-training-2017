import {Injectable} from '@angular/core';

interface Entry {
  created: Date;
  data: any;
}

@Injectable()
export class LogService {

  private _log: Entry[];

  constructor() {
    this._log = [];
  }

  public get log(): Entry[] {
    return this._log;
  }

  createEntry(payload: any) {
    this._log.push({
      created: new Date(),
      data: payload
    });
  }

}

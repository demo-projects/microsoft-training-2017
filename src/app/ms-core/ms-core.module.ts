import {NgModule} from '@angular/core';
import {StorageService} from './storage.service';
import {UpperPipe} from './upper.pipe';
import { CountByPipe } from './count-by.pipe';
import {LogService} from './log.service';

@NgModule({
  providers   : [StorageService, LogService],
  declarations: [UpperPipe, CountByPipe],
  exports     : [UpperPipe, CountByPipe]
})
export class MsCoreModule {
}

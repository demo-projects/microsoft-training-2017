import {NgModule} from '@angular/core';
import {StorageService} from './storage.service';
import {UpperPipe} from './upper.pipe';
import { CountByPipe } from './count-by.pipe';

@NgModule({
  providers   : [StorageService],
  declarations: [UpperPipe, CountByPipe],
  exports     : [UpperPipe, CountByPipe]
})
export class MsCoreModule {
}

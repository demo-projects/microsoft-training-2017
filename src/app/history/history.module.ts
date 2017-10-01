import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import {MsCoreModule} from '../ms-core/ms-core.module';

@NgModule({
  imports: [
    CommonModule,
      MsCoreModule,
  ],
  declarations: [HistoryComponent],
  exports: [HistoryComponent]
})
export class HistoryModule { }

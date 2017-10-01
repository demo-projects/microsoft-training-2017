import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {Item} from '../item';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public items: Item[];

}

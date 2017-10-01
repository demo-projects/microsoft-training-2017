import {Component, OnInit, Input} from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public items: Item[];

}

import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: string;
  @Output() itemAdded = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) {}

}

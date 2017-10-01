import { Component, OnInit } from '@angular/core';
import {LogService} from '../../ms-core/log.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(public logService: LogService) { }

  ngOnInit() {
  }

}

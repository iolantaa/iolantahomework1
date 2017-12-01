import { Component,Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() company:object;

  constructor() { }

  ngOnInit() {
  }

}

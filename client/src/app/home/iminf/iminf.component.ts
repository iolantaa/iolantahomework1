import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iminf',
  templateUrl: './iminf.component.html',
  styleUrls: ['./iminf.component.scss']
})
export class IminfComponent implements OnInit {

  info=[
    {number:"35", text:" Happy Clients"},
    {number:"18", text:" Celebration"},
    {number:"28", text:" Projects Done"},
    {number:"15", text:" Awards"},
  ];

  constructor() { }

  ngOnInit() {
  }

}

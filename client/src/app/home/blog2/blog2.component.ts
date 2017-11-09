import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog2',
  templateUrl: './blog2.component.html',
  styleUrls: ['./blog2.component.scss']
})
export class Blog2Component implements OnInit {
  sblog=[
    {ImgSrc:"../../../assets/images/5.png"},
    {ImgSrc:"../../../assets/images/6.png"},
    {ImgSrc:"../../../assets/images/7.png"},
    {ImgSrc:"../../../assets/images/8.png"},
  ];

  constructor() { }

  ngOnInit() {
  }

}

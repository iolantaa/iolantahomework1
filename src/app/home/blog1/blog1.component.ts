import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog1',
  templateUrl: './blog1.component.html',
  styleUrls: ['./blog1.component.scss']
})
export class Blog1Component implements OnInit {

  public blog=[
    {ImgSrc:"../../../assets/images/1.png"},
    {ImgSrc:"../../../assets/images/2.png"},
    {ImgSrc:"../../../assets/images/3.png"},
    {ImgSrc:"../../../assets/images/4.png"},
  ];

  constructor() { }

  ngOnInit() {
  }

}

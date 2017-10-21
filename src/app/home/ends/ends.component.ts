import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ends',
  templateUrl: './ends.component.html',
  styleUrls: ['./ends.component.scss']
})
export class EndsComponent implements OnInit {
footpic=[
  {ImgSrc:'http://newthemes.net/artim/sectors/agency/wp-content/uploads/2016/11/e.png'},
  {ImgSrc:'http://newthemes.net/artim/sectors/agency/wp-content/uploads/2016/11/g.png'},
  {ImgSrc:'http://newthemes.net/artim/sectors/agency/wp-content/uploads/2016/11/h.png'},
  {ImgSrc:'http://newthemes.net/artim/sectors/agency/wp-content/uploads/2016/11/d.png'},
  {ImgSrc:'http://newthemes.net/artim/sectors/agency/wp-content/uploads/2016/11/c.png'},
  
];
  constructor() { }

  ngOnInit() {
  }

}

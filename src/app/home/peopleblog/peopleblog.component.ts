import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopleblog',
  templateUrl: './peopleblog.component.html',
  styleUrls: ['./peopleblog.component.scss']
})
export class PeopleblogComponent implements OnInit 
{
  public images=[
    {ImgSrc:"../../../assets/images/img3.png", title:"Alex Smith", text:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat."},
    {ImgSrc:"../../../assets/images/img4.png", title:"Susan Tylor", text:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat."},
  
     {ImgSrc:"../../../assets/images/img1.png",title:"George Smith", text:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat."},
    {ImgSrc:"../../../assets/images/img2.png", title:"Lexi Tylor", text:"Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat."},
   ];
   


  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  @Input() company:object;
  
  @Output() detailsSaved=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  savedetails() {
    this.detailsSaved.emit(this.company);
  }

}

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() company:object;
  
  @Output() generalSaved=new EventEmitter();
  file:File;
  public imageloaded=false;
   

  constructor() { }

  ngOnInit() {
  }
  getFile(event)
  {
  	this.file=event.target.files[0];
  	this.company["image"]=this.file.name;
  	this.imageloaded=true;
  }
  getFile1(event)
  {
  	this.file=event.target.files[0];
  	this.company["image1"]=this.file.name;
  	this.imageloaded=true;
  }
savegeneral() {
	this.generalSaved.emit(this.company);
}


}

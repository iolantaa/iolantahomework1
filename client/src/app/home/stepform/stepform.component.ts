import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DatePickerComponent} from 'ng2-date-picker';
import {HttpClient } from '@angular/common/http';
import {UserService} from '../../user/user.service';



// declare var jquery:any;
// declare var $ :any;
@Component({
  selector: 'app-stepform',
  templateUrl: './stepform.component.html',
  styleUrls: ['./stepform.component.scss']
})

export class StepformComponent implements OnInit {
  public step1saved=false;
  public step2saved=false;
  public step3saved=false;
 
  public step=1;
  public company: object={
     title: '',
     description:'',
      image:'',
      image1:'',
    website:'',
    create:'',
    country:'', 
    emplo:'',
    seo:'',
    city:'',
    address:'',
    cardnumber:'',
    month:'',
    year:'',
    cvc:'',
    email:'',
  };

  
  constructor(private http:HttpClient, private userService:UserService, private router:Router) {
  }

 API_URL='http://localhost:8000/app/v1/company';
ngOnInit() {
}
  gotoPage(isNext){
    this.step+=(isNext)?1:-1;
    }
    savegeneral(company: object)
    {
    this.step++;
    this.company = company;
    this.step1saved=true;
    // this.company["step1saved"]=true;
    //  console.log(this.company);
    }
    savedetails(company: object)
    {
    this.step++;
    this.company = company;
    this.step2saved=true;
    // this.company["step2saved"]=true;
    //  console.log(this.company);
    }
    savepayment(product: object)
    {
    this.company = product;
    this.step3saved=true;
    console.log(this.company);
    // this.company["step3saved"]=true;
    //  console.log(this.company);
    }
    finish(company: object)
    {
     this.step++;
     console.log(this.company);
     this.userService.setUser(this.API_URL,this.company);
    }

}

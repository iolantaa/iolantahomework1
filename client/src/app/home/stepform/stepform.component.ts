import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-stepform',
  templateUrl: './stepform.component.html',
  styleUrls: ['./stepform.component.scss']
})
export class StepformComponent implements OnInit {
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
    step1saved:false,
    step2saved:false,
    step3saved:false
  };

  constructor(private router:Router) { }


  ngOnInit() {
    
       
  }
  gotoPage(isNext){
    this.step+=(isNext)?1:-1;
    }
    savegeneral(company: object)
    {
    this.step++;
    this.company = company;
    this.company["step1saved"]=true;
     console.log(this.company);
    }
    savedetails(company: object)
    {
    this.step++;
    this.company = company;
    this.company["step2saved"]=true;
     console.log(this.company);
    }
    savepayment(product: object)
    {
    this.company = product;
    this.company["step3saved"]=true;
     console.log(this.company);
    }
    finish(company: object)
    {
     this.step++;
     console.log(this.company);
    }

}

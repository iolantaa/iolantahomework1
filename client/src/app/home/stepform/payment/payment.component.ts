import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../user/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() company:object;
  
  @Output() paymentSaved=new EventEmitter();
  @Output() allSaved=new EventEmitter();
  public payment={
    email:'',
    number:'',
    month:'',
    year:'',
    cvc:'',
    amount:''
  };
  
    constructor(private router:Router, private userService:UserService) {
    }
  

  ngOnInit() {
  }
  savepayment() {
    this.paymentSaved.emit(this.company);
  }
  finish()
  {
    this.allSaved.emit(this.company);
  }
  update(){
    this.userService.updateUser(this.company);
  }
  pay(company){
  this.payment["email"]=this.company["email"];
  this.payment["number"]=this.company["cardnumber"];
  this.payment["year"]=this.company["year"];
  this.payment["month"]=this.company["month"];
  this.payment["cvc"]=this.company["cvc"];
  this.payment["amount"]=this.company["price"];
  console.log(this.payment);
  this.userService.pay(this.payment);
  }
}

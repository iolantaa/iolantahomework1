import { Component, OnInit,Input, Output ,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  @Input() company:object;
  
  @Output() paymentSaved=new EventEmitter();
  @Output() allSaved=new EventEmitter();
  
    constructor(private router:Router) {
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
}

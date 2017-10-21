import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',

  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  
  

  constructor(private router:Router) { }

  ngOnInit() {console.log('hit');}
  MyFunction(){
    let testt = confirm("Is it true that 1+1=2?");
    
    alert( testt );
    
}

Registr(e) {
  e.preventDefault();
  console.log(e);
  var username = e.target.elements[0].value;
  var password = e.target.elements[1].value;
 
  
  if(username == 'root' && password == 'root') {
    this.router.navigate(['']);//повертає на home
  }
 } 

}

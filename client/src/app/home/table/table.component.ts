import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import { Router } from '@angular/router';
import { StepformComponent } from '../stepform/stepform.component'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
public users=[];
public id="";
  constructor(private userService:UserService, private router:Router) { 
  	this.userService.uploadUsers();
  }

  ngOnInit() {
  	this.getUsers();
    
  	
  }
  getUsers(){
    this.userService.getUsers().subscribe(users => {
           this.users = users;
           console.log(this.users);
   });}
    deleteUser(id){
      this.userService.deleteUser(id);
    }
    sendtoform(company){
      this.id=company._id;
      console.log(this.id);
    }
    updateUser(company){
      this.userService.updateUser(company);
    }
  }
//  getUsers(){
//  this.userService.getUsers().subscribe(users => {
//         this.users = users;
//         console.log(this.users);
// });}
//  deleteUser(id){
//    this.userService.deleteUser(id);
//  }
//  updateUser(compan){
//    this.userService.updateUser(compan);
//  }


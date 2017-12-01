import { Component, OnInit } from '@angular/core';
import {UserService} from '../../user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
public users=[];
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
 updateUser(compan){
   this.userService.updateUser(compan);
 }

}
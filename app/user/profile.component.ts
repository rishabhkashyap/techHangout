import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl:'app/user/profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm:FormGroup
  constructor(private route:Router,private authService:AuthService){}

  ngOnInit(){
    let firstname=new FormControl(this.authService.currentUser.firstname)
    let lastname=new FormControl(this.authService.currentUser.lastname)
    this.profileForm=new FormGroup({
      firstname:firstname,
      lastname:lastname
    })    
  }

  updateProfile(formValues){
    this.authService.update(formValues.firstname,formValues.lastname)
    this.route.navigate(['events'])
  }
  cancel(){
    this.route.navigate(['events'])
  }
       
}
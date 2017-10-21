import { ToastrService } from '../common/toastr.service';
import { composeAsyncValidators } from '@angular/forms/src/directives/shared';
import { Route, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstname: FormControl
  private lastname: FormControl
  constructor(private route: Router, private authService: AuthService,private toastrService:ToastrService ) { }

  ngOnInit() {
    this.firstname = new FormControl(this.authService.currentUser.firstname,Validators.required)
    this.lastname = new FormControl(this.authService.currentUser.lastname,Validators.required)
    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    })
  }

  updateProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.update(formValues.firstname, formValues.lastname)
      //this.route.navigate(['events'])
      this.toastrService.success('Profile saved')
    }

  }
  cancel() {
    this.route.navigate(['events'])
  }
  isFirstnameValid(){
    return this.firstname.valid||this.firstname.untouched
  }

  isLastNameValid(){
    return this.lastname.valid||this.lastname.untouched
  }

}
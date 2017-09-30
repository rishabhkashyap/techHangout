import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';


@Component({
    templateUrl:'app/user/login.component.html'
    
})
export class LoginComponent{
    constructor(private authService:AuthService,private router:Router){

    }
    login(loginForm){
        this.authService.loginUser(loginForm.userName,loginForm.password)
        this.router.navigate(['events'])
    }
    cancel(){
         this.router.navigate(['events'])
    }

}
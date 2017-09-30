import { User } from './User.model';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{
    currentUser:User
    loginUser(username:string,password:string){
          this.currentUser={
              id:1,
              firstname:'James',
              lastname:'Kirk',
              username:'jkirk'
          }  
    }
    
    isAuthenticated(){
        return !!this.currentUser;
    }
}
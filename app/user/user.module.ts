import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { UserRoutes } from './user.route';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[
        CommonModule,
        FormsModule,        
        ReactiveFormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    providers:[

    ]

})
export class  UserModule{

}
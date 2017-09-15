import { UserRoutes } from './user.route';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';


@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations:[
        ProfileComponent
    ],
    providers:[

    ]

})
export class  UserModule{

}
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';
import { Component } from '@angular/core';
import * as path from 'path';

export const UserRoutes=[
    {path:'profile',component:ProfileComponent},
    {path:'login',compenent:LoginComponent}
]
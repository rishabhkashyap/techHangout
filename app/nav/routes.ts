import { LoadChildren } from '@angular/router/src/config';
import { EventResolver } from './../events/shared/event-resolver.service';
import { resolve } from 'dns';
import { createEventComponent } from './../events/shared/create-eventComponent';
import { Component } from '@angular/core';
import { EventDetailsComponenet } from './../events/event-details/event-details.component';
import { EventsListComponent } from './../events/events-list.component';
import { Routes } from '@angular/router';
import * as path from 'path';



export const appRoutes=[
    {path:'events/new',component:createEventComponent},
    {path:'events',component:EventsListComponent,resolve:
{events:EventResolver}},
    {path:'events/:id',component:EventDetailsComponenet},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'/app/user/user.module#UserModule'}
]
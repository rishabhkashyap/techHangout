import { createEventComponent } from './../events/shared/create-eventComponent';
import { Component } from '@angular/core';
import { EventDetailsComponenet } from './../events/event-details/event-details.component';
import { EventsListComponent } from './../events/events-list.component';
import { Routes } from '@angular/router';
import * as path from 'path';



export const appRoutes=[
    {path:'events/new',component:createEventComponent},
    {path:'events',component:EventsListComponent},
    {path:'events/:id',component:EventDetailsComponenet},
    {path:'',redirectTo:'/events',pathMatch:'full'}
]
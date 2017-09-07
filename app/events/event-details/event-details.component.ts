import { ActivatedRoute } from '@angular/router';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:'/app/events/event-details/event-detaiils.html',
    styles:[`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    `]
    
})
export class EventDetailsComponenet implements OnInit{
    event:any
    constructor(private eventService:EventService,private route:ActivatedRoute){

    }
    ngOnInit(){
        this.event=this.eventService.getEventById(+this.route.snapshot.params['id'])
    }

}
import { IEvent } from './../shared/event.model';
import { ISession } from '../shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl:'/app/events/event-details/event-detaiils.html',
    styles:[`
    .container{padding-left:20px;padding-right:20px;}
    .event-image{height:100px;}
    .a {cursor:pointer}
    `]
    
})
export class EventDetailsComponenet implements OnInit{
    event:IEvent;
    addMode:boolean;
    filterBy:string='all';
    constructor(private eventService:EventService,private route:ActivatedRoute){

    }
    ngOnInit(){
        this.event=this.eventService.getEventById(+this.route.snapshot.params['id'])
    }
    
    addSession(){
        this.addMode=true
    }

    saveNewSession(session:ISession){
        const nextId=Math.max.apply(null,this.event.sessions.map(s=>s.id))
        session.id=nextId+1
        this.event.sessions.push(session)
        this.eventService.updateEvent(this.event)
        this.addMode=false

    }

    cancelAddSession(){
        this.addMode=false
    }

}
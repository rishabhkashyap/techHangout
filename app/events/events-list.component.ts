import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventAppCompenent } from './../event-app.component';
import { EventService } from './shared/event.service';
import { NgFor } from '@angular/common/src/directives/ng_for';

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'events-list',
    //templateUrl:'app/events/event-list.component.html'
    template: `
        <div>
            <h1>Upcoming Angular event</h1>
	        <hr/>
            <div class="row">
                <div class="col-md-5" *ngFor="let event of events">
                    <event-thumbnail  (click)="handleThumbnailClick(event.name)"
                     [techEvent]="event"></event-thumbnail>
                </div>
            </div>
            
        </div>
   `

})
export class EventsListComponent implements OnInit {
    events: IEvent[];
    constructor(private eventService: EventService,private toastrService:ToastrService,private route :ActivatedRoute) {

    }
    ngOnInit() {
        // this.eventService.getEvents().subscribe(
        //    events=> this.events=events
        // )
        this.events=this.route.snapshot.data['events']
    }
    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName)
    }

}
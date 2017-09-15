import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import{Resolve} from '@angular/router'

@Injectable()
export class EventResolver implements Resolve<any>{
    constructor(private eventService:EventService){}
    resolve(){
        return this.eventService.getEvents().map(events=>events)
    }

}
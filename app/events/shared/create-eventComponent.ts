import { EventService } from './event.service';
import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl:'app/events/shared/create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color:#999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class createEventComponent{
    constructor(private route:Router,private eventService:EventService){
        
    }
    cancel(){
        this.route.navigate(['/events'])
    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues)
        this.route.navigate(['/events'])
    }

}
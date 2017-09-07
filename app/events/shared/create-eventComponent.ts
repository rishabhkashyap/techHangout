import { Route, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    template:`
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3>Create new event here</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Create </button>
        <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    `
})
export class createEventComponent{
    constructor(private route:Router){
        
    }
    cancel(){
        this.route.navigate(['/events'])
    }

}
import { UpperCasePipe } from '@angular/common/src/pipes/uppercase_pipe';
import { IEvent } from './shared/event.model';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common/src/directives/ng_switch';
import {Component,Input} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`<div [routerLink]="['/events',techEvent.id]" class="well hoverwell thumbnail">
		<h2>{{techEvent.name | uppercase}}</h2>
		<div>Date:{{techEvent?.date}}</div>
		<div>Time:{{techEvent?.time}}</div>
		<div [ngSwitch]="techEvent?.time">
			<span *ngSwitchCase="'08:00 am'">Early start</span>
			<span *ngSwitchCase="'10:00 am'">Late start</span>
			<span *ngSwitchDefault>Normal start</span>
		</div>
		<div>Price:\${{techEvent?.price}}</div>
		<div>
			<span>Location:{{techEvent.location.address}}</span>
			<span>&nbsp;&nbsp;</span><br/>
			<span>City:{{techEvent?.location.city}}</span>
		</div>

	</div>
    `,
	styles:[`
		.thumbnail {min-height:210px;}
		.pad-left {margin-left:10px;}
		.well div{color:#bbb;}
	`]
})
export class EventThumbnailComponent{
 @Input() techEvent:IEvent
 handleClick(){
     console.log('Clicked');
 }

}
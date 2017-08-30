import {Component,Input} from '@angular/core';

@Component({
    selector:'event-thumbnail',
    template:`<div class="well hoverwell thumbnail">
		<h2>{{techEvent.name}}</h2>
		<div>Date:{{techEvent.date}}</div>
		<div>Time:{{techEvent.time}}</div>
		<div>Price:\${{techEvent.price}}</div>
		<div>
			<span>Location:{{techEvent.location.address}}</span>
			<span>&nbsp;&nbsp;</span><br/>
			<span>City:{{techEvent.location.city}}</span>
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
 @Input() techEvent:any
 handleClick(){
     console.log('Clicked');
 }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upVote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
        <div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
    `,
    styleUrls: ['/app/events/event-details/upvote.component.css'],
})

export class UpVoteComponent{
    @Input() count:number;
    @Input() voted:boolean;
    @Output() vote=new EventEmitter();

    onclick(){
        this.vote.emit({});
    }

}
import { NgIf } from '@angular/common/src/directives/ng_if';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upVote',
    template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingButton">
             <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
             <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>           
        
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
    
    

    onClick(){
        this.vote.emit({});
    }

}
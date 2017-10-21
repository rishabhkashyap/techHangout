import { VoterService } from './../shared/vote.servce';
import { AuthService } from './../../user/auth.service';
import { ISession } from '../shared/event.model';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    validSession: ISession[] = [];

    constructor(private authService:AuthService,private voterService:VoterService){}

    toggleVote(session:ISession){
        if(this.userHasVoted(session)){
            this.voterService.deleteVoter(session,this.authService.currentUser.username);
        }else{
            this.voterService.addVoter(session,this.authService.currentUser.username)
        }
    }
    userHasVoted(session:ISession){
        return this.voterService.userHasVoted(session,this.authService.currentUser.username);
    }

    ngOnChanges() {
        if (this.sessions) {
            if (this.filterBy === 'all') {
                this.validSession = this.sessions.slice(0);
            } else {
                this.validSession = this.sessions.filter(session => {
                    return session.level.toLocaleLowerCase() === this.filterBy;
                });
            }
        }

    }



}
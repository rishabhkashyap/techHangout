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
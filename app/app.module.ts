import { VoterService } from './events/shared/vote.servce';
import { UpVoteComponent } from './events/event-details/upVote-component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { JQ_TOKEN } from './common/jquery.service';
import { DurationPipe } from './common/duration.pipe';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { SessionCOmponent } from './events/event-details/create-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { EventResolver } from './events/shared/event-resolver.service';
import { createEventComponent } from './events/shared/create-eventComponent';
import { appRoutes } from './nav/routes';
import { RouterModule } from '@angular/router';
import { EventDetailsComponenet } from './events/event-details/event-details.component';
import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.componenet';
import { EventsListComponent } from './events/events-list.component';
import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{EventAppCompenent} from './event-app.component';
import{NavBarComponent} from './nav/nav-bar.component';
import{SimpleModalComponent} from  './common/simple-model.component';

declare let jQuery:Object;

@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule],    
    declarations:[EventAppCompenent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponenet,
    createEventComponent,
    SessionCOmponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent
    ],
    providers:[EventService,
    ToastrService,
    EventResolver,
    AuthService,
    VoterService,
    {provide:JQ_TOKEN,useValue:jQuery}],
    bootstrap:[EventAppCompenent]
})
export class AppModule{

}
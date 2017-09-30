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
import{NavBarComponent} from './nav/nav-bar.component'


@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(appRoutes)],    
    declarations:[EventAppCompenent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponenet,
    createEventComponent],
    providers:[EventService,
    ToastrService,
    EventResolver,
    AuthService],
    bootstrap:[EventAppCompenent]
})
export class AppModule{

}
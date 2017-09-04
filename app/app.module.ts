import { ToastrService } from './common/toastr.service';
import { EventService } from './events/shared/event.service';
import { EventThumbnailComponent } from './events/event-thumbnail.componenet';
import { EventsListComponent } from './events/events-list.component';
import{NgModule} from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import{EventAppCompenent} from './event-app.component';
import{NavBarComponent} from './nav/nav-bar.component'


@NgModule({
    imports: [BrowserModule],    
    declarations:[EventAppCompenent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent],
    providers:[EventService,
    ToastrService],
    bootstrap:[EventAppCompenent]
})
export class AppModule{

}
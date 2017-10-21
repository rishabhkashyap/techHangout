import { ISession } from '../events/shared/event.model';
import { EventService } from './../events/shared/event.service';
import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

@Component({
    selector:'nav-bar',
    templateUrl:'app/nav/nav-bar.component.html',
    styles:[
        `.nav.navbar-nav{font-size:15px}
        #searchForm{margin-right:80px}
        @media (max-width:1200px){#searchForm {display:none}}`
    ]
})
export class NavBarComponent{
    foundSession:ISession[]=[];
    constructor(private authService:AuthService,private eventService:EventService){

    }

    searchSession(searchTerm:string){
        this.eventService.searchSession(searchTerm).subscribe(
            sessions=>{
                this.foundSession=sessions;
            }
        );
       

    }

}
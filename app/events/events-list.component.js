"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var toastr_service_1 = require("../common/toastr.service");
var event_service_1 = require("./shared/event.service");
var core_1 = require("@angular/core");
var EventsListComponent = (function () {
    function EventsListComponent(eventService, toastrService, route) {
        this.eventService = eventService;
        this.toastrService = toastrService;
        this.route = route;
    }
    EventsListComponent.prototype.ngOnInit = function () {
        // this.eventService.getEvents().subscribe(
        //    events=> this.events=events
        // )
        this.events = this.route.snapshot.data['events'];
    };
    EventsListComponent.prototype.handleThumbnailClick = function (eventName) {
        this.toastrService.success(eventName);
    };
    EventsListComponent = __decorate([
        core_1.Component({
            selector: 'events-list',
            // templateUrl:'app/events/event-list.component.html'
            template: "\n        <div>\n            <h1>Upcoming Angular event</h1>\n\t        <hr/>\n            <div class=\"row\">\n                <div class=\"col-md-5\" *ngFor=\"let event of events\">\n                    <event-thumbnail  (click)=\"handleThumbnailClick(event.name)\"\n                     [techEvent]=\"event\"></event-thumbnail>\n                </div>\n            </div>\n            \n        </div>\n   "
        }),
        __metadata("design:paramtypes", [event_service_1.EventService, toastr_service_1.ToastrService, router_1.ActivatedRoute])
    ], EventsListComponent);
    return EventsListComponent;
}());
exports.EventsListComponent = EventsListComponent;
//# sourceMappingURL=events-list.component.js.map
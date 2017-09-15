"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_resolver_service_1 = require("./../events/shared/event-resolver.service");
var create_eventComponent_1 = require("./../events/shared/create-eventComponent");
var event_details_component_1 = require("./../events/event-details/event-details.component");
var events_list_component_1 = require("./../events/events-list.component");
exports.appRoutes = [
    { path: 'events/new', component: create_eventComponent_1.createEventComponent },
    { path: 'events', component: events_list_component_1.EventsListComponent, resolve: { events: event_resolver_service_1.EventResolver } },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponenet },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map
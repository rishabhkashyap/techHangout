"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_resolver_service_1 = require("./events/shared/event-resolver.service");
var create_eventComponent_1 = require("./events/shared/create-eventComponent");
var routes_1 = require("./nav/routes");
var router_1 = require("@angular/router");
var event_details_component_1 = require("./events/event-details/event-details.component");
var toastr_service_1 = require("./common/toastr.service");
var event_service_1 = require("./events/shared/event.service");
var event_thumbnail_componenet_1 = require("./events/event-thumbnail.componenet");
var events_list_component_1 = require("./events/events-list.component");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var event_app_component_1 = require("./event-app.component");
var nav_bar_component_1 = require("./nav/nav-bar.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes)],
            declarations: [event_app_component_1.EventAppCompenent,
                events_list_component_1.EventsListComponent,
                event_thumbnail_componenet_1.EventThumbnailComponent,
                nav_bar_component_1.NavBarComponent,
                event_details_component_1.EventDetailsComponenet,
                create_eventComponent_1.createEventComponent],
            providers: [event_service_1.EventService,
                toastr_service_1.ToastrService,
                event_resolver_service_1.EventResolver],
            bootstrap: [event_app_component_1.EventAppCompenent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
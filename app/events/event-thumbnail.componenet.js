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
var core_1 = require("@angular/core");
var EventThumbnailComponent = (function () {
    function EventThumbnailComponent() {
    }
    EventThumbnailComponent.prototype.handleClick = function () {
        console.log('Clicked');
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EventThumbnailComponent.prototype, "techEvent", void 0);
    EventThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'event-thumbnail',
            template: "<div [routerLink]=\"['/events',techEvent.id]\" class=\"well hoverwell thumbnail\">\n\t\t<h2>{{techEvent.name | uppercase}}</h2>\n\t\t<div>Date:{{techEvent?.date}}</div>\n\t\t<div>Time:{{techEvent?.time}}</div>\n\t\t<div [ngSwitch]=\"techEvent?.time\">\n\t\t\t<span *ngSwitchCase=\"'08:00 am'\">Early start</span>\n\t\t\t<span *ngSwitchCase=\"'10:00 am'\">Late start</span>\n\t\t\t<span *ngSwitchDefault>Normal start</span>\n\t\t</div>\n\t\t<div>Price:${{techEvent?.price}}</div>\n\t\t<div>\n\t\t\t<span>Location:{{techEvent.location.address}}</span>\n\t\t\t<span>&nbsp;&nbsp;</span><br/>\n\t\t\t<span>City:{{techEvent?.location.city}}</span>\n\t\t</div>\n\n\t</div>\n    ",
            styles: ["\n\t\t.thumbnail {min-height:210px;}\n\t\t.pad-left {margin-left:10px;}\n\t\t.well div{color:#bbb;}\n\t"]
        })
    ], EventThumbnailComponent);
    return EventThumbnailComponent;
}());
exports.EventThumbnailComponent = EventThumbnailComponent;
//# sourceMappingURL=event-thumbnail.componenet.js.map
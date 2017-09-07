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
var core_1 = require("@angular/core");
var createEventComponent = (function () {
    function createEventComponent(route) {
        this.route = route;
    }
    createEventComponent.prototype.cancel = function () {
        this.route.navigate(['/events']);
    };
    createEventComponent = __decorate([
        core_1.Component({
            template: "\n    <h1>New Event</h1>\n    <hr>\n    <div class=\"col-md-6\">\n        <h3>Create new event here</h3>\n        <br/>\n        <br/>\n        <button type=\"submit\" class=\"btn btn-primary\">Create </button>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], createEventComponent);
    return createEventComponent;
}());
exports.createEventComponent = createEventComponent;
//# sourceMappingURL=create-eventComponent.js.map
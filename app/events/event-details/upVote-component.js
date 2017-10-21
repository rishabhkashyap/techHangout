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
var UpVoteComponent = (function () {
    function UpVoteComponent() {
        this.vote = new core_1.EventEmitter();
    }
    UpVoteComponent.prototype.onClick = function () {
        this.vote.emit({});
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], UpVoteComponent.prototype, "count", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], UpVoteComponent.prototype, "voted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], UpVoteComponent.prototype, "vote", void 0);
    UpVoteComponent = __decorate([
        core_1.Component({
            selector: 'upVote',
            template: "\n    <div class=\"votingWidgetContainer pointable\" (click)=\"onClick()\">\n      <div class=\"well votingWidget\">\n        <div class=\"votingButton\">\n             <i *ngIf=\"voted\" class=\"glyphicon glyphicon-heart\"></i>\n             <i *ngIf=\"!voted\" class=\"glyphicon glyphicon-heart-empty\"></i>           \n        \n        <div>\n        <div class=\"badge badge-inverse votingCount\">\n          <div>{{count}}</div>\n        </div>\n      </div>\n    </div>\n    ",
            styleUrls: ['/app/events/event-details/upvote.component.css'],
        })
    ], UpVoteComponent);
    return UpVoteComponent;
}());
exports.UpVoteComponent = UpVoteComponent;
//# sourceMappingURL=upVote-component.js.map
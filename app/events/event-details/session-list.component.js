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
var vote_servce_1 = require("./../shared/vote.servce");
var auth_service_1 = require("./../../user/auth.service");
var core_1 = require("@angular/core");
var SessionListComponent = (function () {
    function SessionListComponent(authService, voterService) {
        this.authService = authService;
        this.voterService = voterService;
        this.validSession = [];
    }
    SessionListComponent.prototype.toggleVote = function (session) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.username);
        }
        else {
            this.voterService.addVoter(session, this.authService.currentUser.username);
        }
    };
    SessionListComponent.prototype.userHasVoted = function (session) {
        return this.voterService.userHasVoted(session, this.authService.currentUser.username);
    };
    SessionListComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.sessions) {
            if (this.filterBy === 'all') {
                this.validSession = this.sessions.slice(0);
            }
            else {
                this.validSession = this.sessions.filter(function (session) {
                    return session.level.toLocaleLowerCase() === _this.filterBy;
                });
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SessionListComponent.prototype, "sessions", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SessionListComponent.prototype, "filterBy", void 0);
    SessionListComponent = __decorate([
        core_1.Component({
            selector: 'session-list',
            templateUrl: 'app/events/event-details/session-list.component.html'
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, vote_servce_1.VoterService])
    ], SessionListComponent);
    return SessionListComponent;
}());
exports.SessionListComponent = SessionListComponent;
//# sourceMappingURL=session-list.component.js.map
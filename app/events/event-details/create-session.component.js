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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var SessionCOmponent = (function () {
    function SessionCOmponent() {
        this.newSession = new core_1.EventEmitter();
    }
    SessionCOmponent.prototype.ngOnInit = function () {
        this.name = new forms_1.FormControl('', forms_1.Validators.required);
        this.presenter = new forms_1.FormControl('', forms_1.Validators.required);
        this.duration = new forms_1.FormControl('', forms_1.Validators.required);
        this.level = new forms_1.FormControl('', forms_1.Validators.required);
        this.abstract = new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.maxLength(400)]);
        this.newSessionForm = new forms_1.FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    };
    SessionCOmponent.prototype.saveSession = function (formValues) {
        var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.duration,
            abstract: formValues.abstract,
            voters: []
        };
        this.newSession.emit(session);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SessionCOmponent.prototype, "newSession", void 0);
    SessionCOmponent = __decorate([
        core_1.Component({
            selector: 'create-session',
            templateUrl: 'app/events/event-details/create-session.component.html'
        })
    ], SessionCOmponent);
    return SessionCOmponent;
}());
exports.SessionCOmponent = SessionCOmponent;
//# sourceMappingURL=create-session.component.js.map
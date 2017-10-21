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
var toastr_service_1 = require("../common/toastr.service");
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var ProfileComponent = (function () {
    function ProfileComponent(route, authService, toastrService) {
        this.route = route;
        this.authService = authService;
        this.toastrService = toastrService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.firstname = new forms_1.FormControl(this.authService.currentUser.firstname, forms_1.Validators.required);
        this.lastname = new forms_1.FormControl(this.authService.currentUser.lastname, forms_1.Validators.required);
        this.profileForm = new forms_1.FormGroup({
            firstname: this.firstname,
            lastname: this.lastname
        });
    };
    ProfileComponent.prototype.updateProfile = function (formValues) {
        if (this.profileForm.valid) {
            this.authService.update(formValues.firstname, formValues.lastname);
            //this.route.navigate(['events'])
            this.toastrService.success('Profile saved');
        }
    };
    ProfileComponent.prototype.cancel = function () {
        this.route.navigate(['events']);
    };
    ProfileComponent.prototype.isFirstnameValid = function () {
        return this.firstname.valid || this.firstname.untouched;
    };
    ProfileComponent.prototype.isLastNameValid = function () {
        return this.lastname.valid || this.lastname.untouched;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/user/profile.component.html',
            styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder { color: #999; }\n    .error ::-moz-placeholder { color: #999; }\n    .error :-moz-placeholder { color:#999; }\n    .error :ms-input-placeholder { color: #999; }\n  "]
        }),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService, toastr_service_1.ToastrService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map
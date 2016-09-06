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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var auth_service_1 = require("./auth.service");
var AuthenicationComponent = (function () {
    function AuthenicationComponent(_authService) {
        this._authService = _authService;
    }
    ;
    AuthenicationComponent.prototype.isLoggesIn = function () {
        return this._authService.isLoggedIn();
    };
    AuthenicationComponent = __decorate([
        core_1.Component({
            selector: 'my-auth',
            template: "\n        <header class=\"row spacing\">\n            <nav class=\"col-md-8 col-md-offset-2\">\n                <ul class=\"nav nav-tabs\">\n                    <li><a [routerLink]=\"['./']\" *ngIf=\"!isLoggesIn()\" >Signup</a></li>\n                    <li><a [routerLink]=\"['./signin']\" *ngIf=\"!isLoggesIn()\">Signin</a></li>\n                    <li><a [routerLink]=\"['./logout']\" *ngIf=\"isLoggesIn()\">Logout</a></li>\n                </ul>\n            </nav>\n        </header>\n        <div class=\"row spacing\">\n            <router-outlet></router-outlet>\n        </div>\n\n    ",
            directives: [signup_component_1.SignupComponent, signin_component_1.SigninComponent, logout_component_1.LogoutComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            { path: '', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent }
        ]), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenicationComponent);
    return AuthenicationComponent;
}());
exports.AuthenicationComponent = AuthenicationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVuaWNhdGlvbi5jb21vbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHVCQUF3QyxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBMkIzQztJQUNJLGdDQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7O0lBRWhELDJDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFFBQVEsRUFBQyxxbEJBY1I7WUFDRCxVQUFVLEVBQUMsQ0FBQyxrQ0FBZSxFQUFFLGtDQUFlLEVBQUUsa0NBQWUsRUFBQywwQkFBaUIsQ0FBQztTQUNuRixDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQ3hDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBRTtZQUMvQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7U0FDbEQsQ0FBQzs7OEJBQUE7SUFRRiw2QkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksOEJBQXNCLHlCQU1sQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVuaWNhdGlvbi5jb21vbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TG9nb3V0Q29tcG9uZW50fSBmcm9tIFwiLi9sb2dvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hdXRoJyxcbiAgICB0ZW1wbGF0ZTpgXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuLyddXCIgKm5nSWY9XCIhaXNMb2dnZXNJbigpXCIgPlNpZ251cDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWycuL3NpZ25pbiddXCIgKm5nSWY9XCIhaXNMb2dnZXNJbigpXCI+U2lnbmluPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48YSBbcm91dGVyTGlua109XCJbJy4vbG9nb3V0J11cIiAqbmdJZj1cImlzTG9nZ2VzSW4oKVwiPkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgc3BhY2luZ1wiPlxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczpbU2lnbnVwQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsIExvZ291dENvbXBvbmVudCxST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVzKFtcbiAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6IFNpZ251cENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJy9sb2dvdXQnLCBjb21wb25lbnQ6IExvZ291dENvbXBvbmVudCB9XG5dKVxuXG5leHBvcnQgY2xhc3MgQXV0aGVuaWNhdGlvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKXt9O1xuXG4gICAgaXNMb2dnZXNJbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

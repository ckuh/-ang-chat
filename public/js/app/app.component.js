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
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var authenication_comonent_1 = require("./auth/authenication.comonent");
var header_component_1 = require("./header.component");
var messages_component_1 = require("./messages/messages.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n        <div class=\"container\">\n                <my-header></my-header>\n                <hr>\n                <router-outlet></router-outlet>\n        </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, header_component_1.HeaderComponent]
        }),
        router_1.Routes([
            { path: '/', component: messages_component_1.MessagesComponent },
            { path: '/auth', component: authenication_comonent_1.AuthenicationComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyx1QkFBd0MsaUJBQWlCLENBQUMsQ0FBQTtBQUUxRCx1Q0FBcUMsK0JBQStCLENBQUMsQ0FBQTtBQUNyRSxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxtQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQWtCaEU7SUFBQTtJQUVBLENBQUM7SUFqQkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDRLQU1UO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsa0NBQWUsQ0FBQztTQUNuRCxDQUFDO1FBQ0QsZUFBTSxDQUFDO1lBQ0osRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxzQ0FBaUIsRUFBRTtZQUMzQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLCtDQUFzQixFQUFFO1NBQ3ZELENBQUM7O29CQUFBO0lBR0YsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSb3V0ZXMsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7QXV0aGVuaWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW5pY2F0aW9uLmNvbW9uZW50XCI7XG5pbXBvcnQge0hlYWRlckNvbXBvbmVudH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNZXNzYWdlc0NvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlOiBgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPG15LWhlYWRlcj48L215LWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgSGVhZGVyQ29tcG9uZW50XVxufSlcbkBSb3V0ZXMoW1xuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IE1lc3NhZ2VzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnL2F1dGgnLCBjb21wb25lbnQ6IEF1dGhlbmljYXRpb25Db21wb25lbnQgfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

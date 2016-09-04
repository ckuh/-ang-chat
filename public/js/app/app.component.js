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
var message_component_1 = require("./messages/message.component");
var AppComponent = (function () {
    function AppComponent() {
        this.message = {
            content: 'Amessage',
            author: 'Max'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: " \n     <div class=\"row\">\n        <section class=\"col-md-8 col-md-offset-2\">\n        <input type=\"text\" class=\"form-control\" \n        [(ngModel)]=\"message.content\" \n        placeholder=\"Type in your message\">\n    </section>\n    </div>\n    <div class=\"row\">\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-message></my-message>\n        </section>\n    </div>\n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEwQixlQUFlLENBQUMsQ0FBQTtBQUMxQyxrQ0FBK0IsOEJBQThCLENBQUMsQ0FBQTtBQW9COUQ7SUFBQTtRQUNJLFlBQU8sR0FBRztZQUNOLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxLQUFLO1NBQ2hCLENBQUM7SUFFTixDQUFDO0lBeEJEO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwwWkFhVDtZQUNELFVBQVUsRUFBRSxDQUFDLG9DQUFnQixDQUFDO1NBQ2pDLENBQUM7O29CQUFBO0lBT0YsbUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLG9CQUFZLGVBTXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNZXNzYWdlQ29tcG9uZW50fSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGAgXG4gICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcbiAgICAgICAgWyhuZ01vZGVsKV09XCJtZXNzYWdlLmNvbnRlbnRcIiBcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIGluIHlvdXIgbWVzc2FnZVwiPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICA8bXktbWVzc2FnZT48L215LW1lc3NhZ2U+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGRpcmVjdGl2ZXM6IFtNZXNzYWdlQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgIGNvbnRlbnQ6ICdBbWVzc2FnZScsXG4gICAgICAgIGF1dGhvcjogJ01heCdcbiAgICB9O1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

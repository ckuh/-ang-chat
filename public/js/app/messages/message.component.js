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
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageComponent = (function () {
    function MessageComponent(_messageService) {
        this._messageService = _messageService;
        this.editClicked = new core_1.EventEmitter();
        this.color = 'white';
    }
    MessageComponent.prototype.onEdit = function () {
        this._messageService.editMessage(this.message);
    };
    MessageComponent.prototype.onDelete = function () {
        this._messageService.deleteMesssage(this.message);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', message_1.Message)
    ], MessageComponent.prototype, "message", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MessageComponent.prototype, "editClicked", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            text-align: left;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            diplay: inline-block;\n            float: right;\n            font-size: 12px;\n            width: 18%;\n        }\n\n    "],
            template: "\n            <article class=\"panel panel-default\" \n            [ngStyle]=\"{'background-color': color}\"\n            (mouseenter)=\"color = 'red'\"\n            (mouseleave)=\"color = 'white'\"\n            \n            >\n                <div class=\"panel-body\">\n                    {{ message.content }}    \n                </div>\n                <footer class=\"panel-footer\">\n                    <div class=\"author\">\n                        {{ message.username }}\n                    </div>\n                    <div class=\"config\">\n                        <a  (click)=\"onEdit()\" >Edit</a> | \n                        <a  (click)=\"onDelete()\" >Delete</a>\n                    </div>\n                </footer>\n            </article>\n"
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFDdkQsQ0FBQyxDQURxRTtBQUN0RSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUE0Q2pEO0lBS0ksMEJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUh6QyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQ25ELFVBQUssR0FBRyxPQUFPLENBQUE7SUFFc0MsQ0FBQztJQUN0RCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5ELENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFYRDtRQUFDLFlBQUssRUFBRTs7cURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7eURBQUE7SUE1Q2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsTUFBTSxFQUFFLENBQUMsc1ZBZVIsQ0FBQztZQUNGLFFBQVEsRUFBRSw2dkJBb0JiO1NBRUEsQ0FBQzs7d0JBQUE7SUFpQkYsdUJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLHdCQUFnQixtQkFlNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiO1xuaW1wb3J0IHtFdmVudEVtaXR0ZXJ9IGZyb20gXCJAYW5ndWxhci9jb21waWxlci9lc20vc3JjL2ZhY2FkZS9hc3luY1wiO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSBcIi4vbWVzc2FnZS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktbWVzc2FnZScsXG4gICAgc3R5bGVzOiBbYFxuICAgICAgICAuYXV0aG9yIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgICAgIC5jb25maWcge1xuICAgICAgICAgICAgZGlwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDogMTglO1xuICAgICAgICB9XG5cbiAgICBgXSAsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiIFxuICAgICAgICAgICAgW25nU3R5bGVdPVwieydiYWNrZ3JvdW5kLWNvbG9yJzogY29sb3J9XCJcbiAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImNvbG9yID0gJ3JlZCdcIlxuICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiY29sb3IgPSAnd2hpdGUnXCJcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UuY29udGVudCB9fSAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVwicGFuZWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IG1lc3NhZ2UudXNlcm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb25maWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICAoY2xpY2spPVwib25FZGl0KClcIiA+RWRpdDwvYT4gfCBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICAoY2xpY2spPVwib25EZWxldGUoKVwiID5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBjb2xvciA9ICd3aGl0ZSdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxuICAgIG9uRWRpdCgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcblxuICAgIH1cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc3NhZ2UodGhpcy5tZXNzYWdlKTtcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
var MessageComponent = (function () {
    function MessageComponent() {
        this.message = new message_1.Message('The Content', null, 'Max');
    }
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'my-message',
            styles: ["\n        .author {\n            display: inline-block;\n            font-style: italic;\n            text-align: left;\n            font-size: 12px;\n            width: 80%;\n        }\n        .config {\n            diplay: inline-block;\n            float: right;\n            font-size: 12px;\n            width: 18%;\n        }\n\n    "],
            template: "\n            <article class=\"panel panel-default\">\n                <div class=\"panel-body\">\n                    {{ message.content }}    \n                </div>\n                <footer class=\"panel-footer\">\n                    <div class=\"author\">\n                        {{ message.username }}\n                    </div>\n                    <div class=\"config\">\n                        <a href=\"#\">Edit</a> | \n                        <a href=\"#\">Delete</a>\n                    </div>\n                </footer>\n            </article>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEIsZUFDMUIsQ0FBQyxDQUR3QztBQUN6Qyx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUF1Q2xDO0lBQUE7UUFDSSxZQUFPLEdBQVksSUFBSSxpQkFBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFFOUQsQ0FBQztJQXhDRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixNQUFNLEVBQUUsQ0FBQyxzVkFlUixDQUFDO1lBQ0YsUUFBUSxFQUFFLHFqQkFlYjtTQUVBLENBQUM7O3dCQUFBO0lBS0YsdUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLHdCQUFnQixtQkFHNUIsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZyB7XG4gICAgICAgICAgICBkaXBsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOCU7XG4gICAgICAgIH1cblxuICAgIGBdICxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5FZGl0PC9hPiB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgbWVzc2FnZTogTWVzc2FnZSA9IG5ldyBNZXNzYWdlKCdUaGUgQ29udGVudCcsIG51bGwsICdNYXgnKVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

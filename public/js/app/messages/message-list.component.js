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
var message_component_1 = require("./message.component");
var message_service_1 = require("./message.service");
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.getMessages()
            .subscribe(function (messages) {
            _this.messages = messages;
            _this._messageService.messages = messages;
        }, function (error) { return console.log(error); });
    };
    MessageListComponent = __decorate([
        core_1.Component({
            selector: 'my-message-list',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <my-message \n                *ngFor=\"let message of messages\"\n                [message]=\"message\"\n                (editClicked)=\"message.content = $event\"\n            ></my-message>\n        </section>\n\n    ",
            directives: [message_component_1.MessageComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageListComponent);
    return MessageListComponent;
}());
exports.MessageListComponent = MessageListComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUVyRCxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQWtCakQ7SUFDSSw4QkFBb0IsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO0lBQUUsQ0FBQztJQUV0RCx1Q0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTthQUM3QixTQUFTLENBQ04sVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQzdDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFFVCxDQUFDO0lBNUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLGlTQVNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsb0NBQWdCLENBQUM7U0FDakMsQ0FBQzs7NEJBQUE7SUFpQkYsMkJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDRCQUFvQix1QkFlaEMsQ0FBQSIsImZpbGUiOiJtZXNzYWdlcy9tZXNzYWdlLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vbWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiXG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LW1lc3NhZ2UtbGlzdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxteS1tZXNzYWdlIFxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCJcbiAgICAgICAgICAgICAgICBbbWVzc2FnZV09XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAoZWRpdENsaWNrZWQpPVwibWVzc2FnZS5jb250ZW50ID0gJGV2ZW50XCJcbiAgICAgICAgICAgID48L215LW1lc3NhZ2U+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgIGAsXG4gICAgZGlyZWN0aXZlczogW01lc3NhZ2VDb21wb25lbnRdXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG4gICAgICAgIG1lc3NhZ2VzOiBNZXNzYWdlW107XG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VzID0gbWVzc2FnZXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

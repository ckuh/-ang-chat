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
        this._messageService.deleteMesssage(this.message)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    MessageComponent.prototype.belongToUser = function () {
        return localStorage.getItem('userId') == this.message.userId;
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
            template: "\n            <article class=\"panel panel-default\" \n            [ngStyle]=\"{'background-color': color}\"\n            (mouseenter)=\"color = 'red'\"\n            (mouseleave)=\"color = 'white'\"\n            \n            >\n                <div class=\"panel-body\">\n                    {{ message.content }}    \n                </div>\n                <footer class=\"panel-footer\">\n                    <div class=\"author\">\n                        {{ message.username }}\n                    </div>\n                    <div class=\"config\" *ngIf=\"belongToUser()\">\n                        <a  (click)=\"onEdit()\" >Edit</a> | \n                        <a  (click)=\"onDelete()\" >Delete</a>\n                    </div>\n                </footer>\n            </article>\n"
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFDdkQsQ0FBQyxDQURxRTtBQUN0RSx3QkFBc0IsV0FBVyxDQUFDLENBQUE7QUFFbEMsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUE0Q2pEO0lBS0ksMEJBQW9CLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUh6QyxnQkFBVyxHQUFHLElBQUksbUJBQVksRUFBVSxDQUFDO1FBQ25ELFVBQUssR0FBRyxPQUFPLENBQUE7SUFFc0MsQ0FBQztJQUN0RCxpQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRW5ELENBQUM7SUFDRCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUM1QyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFDVixDQUFDO0lBQ0QsdUNBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ2pFLENBQUM7SUFsQkQ7UUFBQyxZQUFLLEVBQUU7O3FEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3lEQUFBO0lBNUNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLE1BQU0sRUFBRSxDQUFDLHNWQWVSLENBQUM7WUFDRixRQUFRLEVBQUUsc3hCQW9CYjtTQUVBLENBQUM7O3dCQUFBO0lBd0JGLHVCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSx3QkFBZ0IsbUJBc0I1QixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL2VzbS9zcmMvZmFjYWRlL2FzeW5jXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbmZpZyB7XG4gICAgICAgICAgICBkaXBsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiAxOCU7XG4gICAgICAgIH1cblxuICAgIGBdICxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2JhY2tncm91bmQtY29sb3InOiBjb2xvcn1cIlxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiY29sb3IgPSAncmVkJ1wiXG4gICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJjb2xvciA9ICd3aGl0ZSdcIlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS5jb250ZW50IH19ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJwYW5lbC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgbWVzc2FnZS51c2VybmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbmZpZ1wiICpuZ0lmPVwiYmVsb25nVG9Vc2VyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICAoY2xpY2spPVwib25FZGl0KClcIiA+RWRpdDwvYT4gfCBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhICAoY2xpY2spPVwib25EZWxldGUoKVwiID5EZWxldGU8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuYFxuXG59KVxuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgbWVzc2FnZTogTWVzc2FnZTtcbiAgICBAT3V0cHV0KCkgZWRpdENsaWNrZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgICBjb2xvciA9ICd3aGl0ZSdcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX21lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7fVxuICAgIG9uRWRpdCgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZWRpdE1lc3NhZ2UodGhpcy5tZXNzYWdlKTtcblxuICAgIH1cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UuZGVsZXRlTWVzc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cbiAgICBiZWxvbmdUb1VzZXIoKXtcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSA9PSB0aGlzLm1lc3NhZ2UudXNlcklkO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

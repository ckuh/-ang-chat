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
var message_1 = require("./message");
var message_service_1 = require("./message.service");
var MessageInputComponent = (function () {
    function MessageInputComponent(_messageService) {
        this._messageService = _messageService;
        this.message = null;
    }
    MessageInputComponent.prototype.onSubmit = function (form, f) {
        var _this = this;
        console.log(f);
        if (this.message) {
            // Edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(function (data) { return console.log(data); }, function (error) { return console.error(error); });
            this.message = null;
        }
        else {
            var message = new message_1.Message(form.content, null, 'Dummy');
            this._messageService.addMessage(message)
                .subscribe(function (data) {
                console.log(data);
                _this._messageService.messages.unshift(data);
            }, function (error) { return console.error(error); });
        }
    };
    MessageInputComponent.prototype.onCancel = function () {
        this.message = null;
    };
    MessageInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._messageService.messageIsEdit.subscribe(function (message) {
            console.log("This is in input", message);
            _this.message = message;
        });
    };
    MessageInputComponent = __decorate([
        core_1.Component({
            selector: 'my-message-input',
            template: "\n        <section class=\"col-md-8 col-md-offset-2\">\n            <form (ngSubmit)=\"onSubmit(f.value,f)\" #f=\"ngForm\">\n                <div class=\"form-group \">\n                    <label for=\"content\">Content</label>\n                    <input ngControl=\"content\" \n                    type=\"text\" id=\"content\" \n                    class=\"form-control\" #input\n                    [ngModel]=\"message?.content\">\n                </div>\n                <button class=\"btn btn-primary\" type=\"submit\"          \n                >{{ !message ? 'Send Message' : 'Save Message' }}</button>\n                \n                <button type=\"button\"\n                 class=\"btn btn-danger\"\n                (click)=\"onCancel()\" \n                *ngIf=\"message\">Cancel</button>\n            </form>\n        </section>\n    "
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], MessageInputComponent);
    return MessageInputComponent;
}());
exports.MessageInputComponent = MessageInputComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2UtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBZ0MsZUFBZSxDQUFDLENBQUE7QUFDaEQsd0JBQXNCLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLGdDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBeUJqRDtJQUdJLCtCQUFvQixlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFGbkQsWUFBTyxHQUFZLElBQUksQ0FBQztJQUU2QixDQUFDO0lBRXRELHdDQUFRLEdBQVIsVUFBUyxJQUFRLEVBQUUsQ0FBQztRQUFwQixpQkFzQkM7UUFyQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNkLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLE9BQU87WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQzNDLFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQU0sT0FBTyxHQUFXLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7aUJBQ25DLFNBQVMsQ0FDTixVQUFBLElBQUk7Z0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hELENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUE7UUFDVCxDQUFDO0lBQ0wsQ0FBQztJQUNELHdDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0Qsd0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUN4QyxVQUFBLE9BQU87WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3ZDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQTdETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFFBQVEsRUFBRSxzMUJBbUJUO1NBQ0osQ0FBQzs7NkJBQUE7SUEwQ0YsNEJBQUM7QUFBRCxDQXpDQSxBQXlDQyxJQUFBO0FBekNZLDZCQUFxQix3QkF5Q2pDLENBQUEiLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiLi9tZXNzYWdlXCI7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1tZXNzYWdlLWlucHV0JyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gKG5nU3VibWl0KT1cIm9uU3VibWl0KGYudmFsdWUsZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiPkNvbnRlbnQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmdDb250cm9sPVwiY29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIGlkPVwiY29udGVudFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiICNpbnB1dFxuICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbF09XCJtZXNzYWdlPy5jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiAgICAgICAgICBcbiAgICAgICAgICAgICAgICA+e3sgIW1lc3NhZ2UgPyAnU2VuZCBNZXNzYWdlJyA6ICdTYXZlIE1lc3NhZ2UnIH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2FuY2VsKClcIiBcbiAgICAgICAgICAgICAgICAqbmdJZj1cIm1lc3NhZ2VcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIG1lc3NhZ2U6IE1lc3NhZ2UgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgICBvblN1Ym1pdChmb3JtOmFueSwgZil7XG4gICAgICAgIGNvbnNvbGUubG9nKGYpXG4gICAgICAgIGlmKHRoaXMubWVzc2FnZSkge1xuICAgICAgICAvLyBFZGl0XG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UuY29udGVudCA9IGZvcm0uY29udGVudDtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2U6TWVzc2FnZSA9IG5ldyBNZXNzYWdlKGZvcm0uY29udGVudCwgbnVsbCwgJ0R1bW15JylcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLmFkZE1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZVNlcnZpY2UubWVzc2FnZXMudW5zaGlmdChkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG51bGw7XG4gICAgfVxuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VTZXJ2aWNlLm1lc3NhZ2VJc0VkaXQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbWVzc2FnZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGlzIGlzIGluIGlucHV0XCIsbWVzc2FnZSlcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

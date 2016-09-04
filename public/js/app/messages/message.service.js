"use strict";
var message_1 = require("./message");
var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.addMessage = function (message) {
        this.messages.push(message);
        console.log(this.messages);
    };
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.editMessage = function (message) {
        this.messages[this.messages.indexOf(message)] = new message_1.Message('Edited', null, 'Mike T');
    };
    MessageService.prototype.deleteMesssage = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0JBQXNCLFdBRXRCLENBQUMsQ0FGZ0M7QUFFakM7SUFBQTtRQUNJLGFBQVEsR0FBYyxFQUFFLENBQUM7SUFrQjdCLENBQUM7SUFoQkcsbUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELG9DQUFXLEdBQVgsVUFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7SUFDekYsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxPQUFlO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzFELENBQUM7SUFFTCxxQkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksc0JBQWMsaUJBbUIxQixDQUFBIiwiZmlsZSI6Im1lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZVwiXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuXG4gICAgYWRkTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgIH1cblxuICAgIGdldE1lc3NhZ2VzKCl7XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzO1xuICAgIH1cbiAgICBlZGl0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKXtcbiAgICAgICAgdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSldID0gbmV3IE1lc3NhZ2UoJ0VkaXRlZCcsIG51bGwsICdNaWtlIFQnKVxuICAgIH1cblxuICAgIGRlbGV0ZU1lc3NzYWdlKG1lc3NhZ2U6TWVzc2FnZSl7XG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwxKVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

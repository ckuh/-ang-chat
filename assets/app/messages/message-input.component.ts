import {Component, OnInit} from "@angular/core";
import {Message} from "./message";
import {MessageService} from "./message.service";

@Component({
    selector: 'my-message-input',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <form (ngSubmit)="onSubmit(f.value,f)" #f="ngForm">
                <div class="form-group ">
                    <label for="content">Content</label>
                    <input ngControl="content" 
                    type="text" id="content" 
                    class="form-control" #input
                    [ngModel]="message?.content">
                </div>
                <button class="btn btn-primary" type="submit"          
                >{{ !message ? 'Send Message' : 'Save Message' }}</button>
                
                <button type="button"
                 class="btn btn-danger"
                (click)="onCancel()" 
                *ngIf="message">Cancel</button>
            </form>
        </section>
    `
})
export class MessageInputComponent implements OnInit{
    message: Message = null;

    constructor(private _messageService: MessageService){}

    onSubmit(form:any, f){
        console.log(f)
        if(this.message) {
        // Edit
            this.message.content = form.content;
            this._messageService.updateMessage(this.message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                )
            this.message = null;
        } else {
            const message:Message = new Message(form.content, null, 'Dummy')
            this._messageService.addMessage(message)
                .subscribe(
                    data => {
                        console.log(data);
                        this._messageService.messages.unshift(data);
                    },
                    error => console.error(error)
                )
        }
    }
    onCancel() {
        this.message = null;
    }
    ngOnInit(){
        this._messageService.messageIsEdit.subscribe(
            message => {
                console.log("This is in input",message)
                this.message = message;
            }
        );
    }


}
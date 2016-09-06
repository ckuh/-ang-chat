import { Component, Input, Output, EventEmitter } from '@angular/core'
import {Message} from "./message";
import {EventEmitter} from "@angular/compiler/esm/src/facade/async";
import {MessageService} from "./message.service";

@Component({
    selector: 'my-message',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            text-align: left;
            font-size: 12px;
            width: 80%;
        }
        .config {
            diplay: inline-block;
            float: right;
            font-size: 12px;
            width: 18%;
        }

    `] ,
    template: `
            <article class="panel panel-default" 
            [ngStyle]="{'background-color': color}"
            (mouseenter)="color = 'red'"
            (mouseleave)="color = 'white'"
            
            >
                <div class="panel-body">
                    {{ message.content }}    
                </div>
                <footer class="panel-footer">
                    <div class="author">
                        {{ message.username }}
                    </div>
                    <div class="config" *ngIf="belongToUser()">
                        <a  (click)="onEdit()" >Edit</a> | 
                        <a  (click)="onDelete()" >Delete</a>
                    </div>
                </footer>
            </article>
`

})

export class MessageComponent {
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();
    color = 'white'

    constructor(private _messageService: MessageService){}
    onEdit() {
        this._messageService.editMessage(this.message);

    }
    onDelete() {
        this._messageService.deleteMesssage(this.message)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }
    belongToUser(){
        return localStorage.getItem('userId') == this.message.userId;
    }


}
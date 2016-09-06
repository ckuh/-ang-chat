
import {Http, Headers} from "@angular/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {Message} from "./message"

@Injectable()
export class MessageService {
    // this is the state of messages in the Message service
    messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private _http: Http){}

    addMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.post(
                'http://localhost:3000/api/message' + token,
                body,
                {headers: headers})
            .map( response => {
                const data = response.json().obj;
                let message = new Message(data.content, data._id, data.user.firstName, data.user._id);
                return message;
            })
            .catch(err => Observable.throw(err.json()))
    }

    getMessages(){
        return this._http.get('/api/message')
            .map(response => {
                const data = response.json().obj;
                console.log("line 32 message service: data from server")
                let objs: any[] = [];
                for (let i = 0; i < data.length; i++ ) {
                    let message = new Message(data[i].content, data[i]._id, data[i].user.firstName, data[i].user._id );
                    objs.push(message);
                }
                return objs;
            })
            .catch(err => Observable.throw(err.json()))
    }

    updateMessage(message: Message){
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json',
        'token': 'Marcodajhjk4h2hh2h3h3h23'});
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.patch('/api/message/' + message.messageId + token, body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

    editMessage(message: Message){
        console.log(message)
        this.messageIsEdit.emit(message);
    }

    deleteMesssage(message:Message){
        this.messages.splice(this.messages.indexOf(message),1);
        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
        return this._http.delete('/api/message/' + message.messageId  + token)
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }

}
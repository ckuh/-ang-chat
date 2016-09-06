import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";

import {AuthenicationComponent} from "./auth/authenication.comonent";
import {HeaderComponent} from "./header.component";
import {MessagesComponent} from "./messages/messages.component";


@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
                <my-header></my-header>
                <hr>
                <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, HeaderComponent]
})
@Routes([
    { path: '/', component: MessagesComponent },
    { path: '/auth', component: AuthenicationComponent }
])
export class AppComponent {

}
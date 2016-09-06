import {Component} from "@angular/core";
import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";
import {AuthService} from "./auth.service";

@Component({
    selector: 'my-auth',
    template:`
        <header class="row spacing">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                    <li><a [routerLink]="['./']" *ngIf="!isLoggesIn()" >Signup</a></li>
                    <li><a [routerLink]="['./signin']" *ngIf="!isLoggesIn()">Signin</a></li>
                    <li><a [routerLink]="['./logout']" *ngIf="isLoggesIn()">Logout</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>

    `,
    directives:[SignupComponent, SigninComponent, LogoutComponent,ROUTER_DIRECTIVES]
})
@Routes([
    { path: '', component: SignupComponent },
    { path: '/signin', component: SigninComponent },
    { path: '/logout', component: LogoutComponent }
])

export class AuthenicationComponent {
    constructor(private _authService: AuthService){};

    isLoggesIn() {
        return this._authService.isLoggedIn();
    }
}
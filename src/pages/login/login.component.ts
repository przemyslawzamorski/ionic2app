import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';
import {HomePage} from '../home/home';


@Component({
    templateUrl: 'login.html',
    providers: [Manager]
})
export class LoginPage {

    public shelterBasicInfo: any;
    public shelterAnimals: any[];
    public erroMessage: string;
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com";
    public badPass: boolean = false;

    constructor(public manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {
    }

    logIn(username: string, password: string) {
        console.log(username, password);
        this.badPass = false;
        this.manager.setUser(username, password).subscribe(
            (loginStat: any) => {
                this.manager.isLogged = true;
                this.nav.push(HomePage, { logged: true, user: this.manager.currentUser });
            },
            err => { this.erroMessage = err; console.log("loginStat2", err); this.badPass = true; },
            () => {
                console.log('Login for shelter completed');
            }
        );
    }
}
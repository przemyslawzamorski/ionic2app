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
        this.manager.setUser(username, password, false, 0, false).subscribe(
            (loginStat: any) => {
                this.manager.currentUser.logged = true;

                this.manager.getUserData(this.manager.currentUser.login, this.manager.currentUser.pass, this.manager.currentUser.logged, 0, false).subscribe(
                    (loginStat: any) => {
                        var usedata = loginStat.json();
                        this.manager.currentUser.id = usedata.id;
                        this.manager.currentUser.isStaff = usedata.is_staff;
                        console.log('manager na user', this.manager.currentUser);
                        this.manager.insertDraggedProduct(this.manager.currentUser);
                        this.nav.pop(HomePage);

                    },
                    err => { this.erroMessage = err; console.log("loginStat2", err); this.badPass = true; },
                    () => {
                        console.log('Login for shelter completed');
                    }
                )
            },
            err => { this.erroMessage = err; console.log("loginStat2", err); this.badPass = true; },
            () => {
                console.log('Login for shelter completed');
            }
        );
    }
}
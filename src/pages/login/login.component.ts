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
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com"

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

    }

    logIn(username: string, password: string) {
        this.manager.setUser(username, password).subscribe(
            (loginStat: any) => {
                console.log('data', loginStat.json());

            },
            err => { this.erroMessage = err; console.log("loginStat2", err) },
            () => console.log('Login for shelter completed')
        );
    }

    goToAnimalDetail(animal) {
        this.nav.push(HomePage);
    }
}
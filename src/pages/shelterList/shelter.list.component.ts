import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';

@Component({
    templateUrl: 'shelterList.html',
    providers: [Manager]
})
export class ShelterListPage {

    public shelterList: any[];
    public erroMessage: string;

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.manager.getShelterList().subscribe(
            (shelters: any) => {
                console.log('data', shelters.json());
                this.shelterList = shelters.json();
            },
            err => { this.erroMessage = err; console.error(err) },
            () => console.log('getRepos completed')
        );
    }
}
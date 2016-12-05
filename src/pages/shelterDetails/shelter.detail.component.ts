import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';


@Component({
    templateUrl: 'shelterDetail.html',
    providers: [Manager]
})
export class ShelterDetailPage {

    public shelterBasicInfo: any[];

    public shelterDetail: any[];
    public erroMessage: string;

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.manager.getShelterList().subscribe(
            (shelters: any) => {
                console.log('data', shelters.json());
                this.shelterDetail = shelters.json();
            },
            err => { this.erroMessage = err; console.error(err) },
            () => console.log('getRepos completed')
        );
    }
}
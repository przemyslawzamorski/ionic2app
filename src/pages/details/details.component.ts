import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';

@Component({
    templateUrl: 'details.html',
    providers: [Manager]
})
export class DetailsPage {
    public readme = '';
    public repo;

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {


        this.repo = navParams.get('repo');

        this.manager.getDetails(this.repo).subscribe(
            data => this.readme = data.text(),
            err => {
                if (err.status == 404) { 
                    this.readme = 'This repo does not have a README. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}
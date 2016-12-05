import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';


@Component({
    templateUrl: 'animalDetail.html',
    providers: [Manager]
})
export class AnimalDetailPage {

    public animal: any;
    public erroMessage: string;

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.animal = navParams.get('animal');
    }
}
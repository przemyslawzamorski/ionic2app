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
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com";
    public user;
    public logged: boolean = false;


    constructor(public manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.animal = navParams.get('animal');

        this.manager.getDraggedProduct().then((droppedProduct: any) => {
            console.log('pobrany', droppedProduct);
            this.user = droppedProduct[0];
            console.log('sets user', this.user);
            if (this.user) {
                this.logged = this.user.logged;
                console.log('set', this.logged);
            }
        });
    }
}
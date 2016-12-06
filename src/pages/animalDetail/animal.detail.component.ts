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
    public question: string = 'Tresc zapytania';
    public pass: boolean = false;
    public fail: boolean = false;


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


    sendQuestion() {
        console.log(this.question, this.animal.id);

        this.manager.sendQuest(this.user, this.question, this.animal.id).subscribe(
            (stat: any) => {
                console.log('status', stat);
                this.pass = true;

            },
            err => { this.fail = false; console.error(err) },
            () => console.log('send completed')
        );
    }
}
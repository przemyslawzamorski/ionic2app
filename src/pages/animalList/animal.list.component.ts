import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';
import {AnimalDetailPage} from '../animalDetail/animal.detail.component';

@Component({
    templateUrl: 'animalList.html',
    providers: [Manager]
})
export class AnimalListPage {

    public animalList: any[];
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com"
    public erroMessage: string;
    public user;
    public logged: boolean = false;

    constructor(public manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.manager.getDraggedProduct().then((droppedProduct: any) => {
            console.log('pobrany', droppedProduct);
            this.user = droppedProduct[0];
            console.log('sets user', this.user);
            if (this.user) {
                this.logged = this.user.logged;
                console.log('set', this.user);

                this.manager.getAnimalsList(this.user.login, this.user.pass, this.user.logged, this.user.id, this.user.isStuff).subscribe(
                    (animals: any) => {
                        console.log('data', animals.json());
                        this.animalList = animals.json();
                    },
                    err => { this.erroMessage = err; console.error(err) },
                    () => console.log('getRepos completed')
                );
            }
        });
    }

    goToAnimalDetail(animal) {
        this.nav.push(AnimalDetailPage, { animal: animal });
    }
}
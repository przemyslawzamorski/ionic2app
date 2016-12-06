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

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        if (this.manager.isLogged) {
            this.manager.getAnimalsList().subscribe(
                (animals: any) => {
                    console.log('data', animals.json());
                    this.animalList = animals.json();
                },
                err => { this.erroMessage = err; console.error(err) },
                () => console.log('getRepos completed')
            );
        }
    }

    goToAnimalDetail(animal) {
        this.nav.push(AnimalDetailPage, { animal: animal });
    }
}
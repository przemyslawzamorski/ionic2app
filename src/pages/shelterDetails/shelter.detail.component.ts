import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';
import {AnimalDetailPage} from '../animalDetail/animal.detail.component';


@Component({
    templateUrl: 'shelterDetail.html',
    providers: [Manager]
})
export class ShelterDetailPage {

    public shelterBasicInfo: any;
    public shelterAnimals: any[];
    public erroMessage: string;
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com"

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.shelterBasicInfo = navParams.get('shelterBasicInfo');
        this.manager.getAnimalsForShelter(this.shelterBasicInfo.id).subscribe(
            (shelters: any) => {
                console.log('data', shelters.json());
                this.shelterAnimals = shelters.json();
            },
            err => { this.erroMessage = err; console.error(err) },
            () => console.log('getAnimals for shelter completed')
        );
    }

    goToAnimalDetail(animal) {
        this.nav.push(AnimalDetailPage, { animal: animal });
    }
}
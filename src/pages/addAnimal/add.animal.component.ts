import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';

@Component({
    templateUrl: 'addAnimal.html',
    providers: [Manager]
})
export class AddAnimalPage {
    private logged: boolean = false;
    public user;
    public shelterList: any[];
    public error: boolean = false;
    public shelterBasicInfo: any;
    public shelterAnimals: any[];
    public erroMessage: string;
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com"

    constructor(private manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {
        this.logged = navParams.get('logged');
        this.user = navParams.get('user');


        this.manager.getShelterList().subscribe(
            (shelters: any) => {
                console.log('data', shelters.json());
                this.shelterList = shelters.json();
            },
            err => { this.erroMessage = err; console.error(err) },
            () => console.log('getRepos completed')
        );
    }

    addPet(name: any, age: any, type: any, gender: any, shelter: any, description: any) {
        console.log(name, age, type, gender, shelter, description)

        if (!shelter || !age || !name) {
            this.error = true;
        } else {

        }
    }
}
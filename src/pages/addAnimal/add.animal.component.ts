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
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com";
    public pass: boolean = false;
    public fail: boolean = false;


    constructor(public manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {
        this.manager.getDraggedProduct().then((droppedProduct: any) => {
            console.log('pobrany', droppedProduct);
            this.user = droppedProduct[0];
            console.log('sets user', this.user);
        });


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
        console.log(name, age, type._values[0], gender, shelter, description)
        this.pass = false;
        this.fail = false;

        if (!shelter || !age || !name) {
            this.error = true;
        } else {

            this.manager.dodajPupila(this.user, name, age, shelter._values[0], type._values[0], description, gender._values[0]).subscribe(
                data => {
                    console.log('dodałem', data);
                    this.pass = true;
                },
                err => { this.fail = true; console.log('error dodawania', err) },
                () => console.log('getRepos completed')
            );

        }
    }
}
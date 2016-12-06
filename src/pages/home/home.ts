import {Component} from "@angular/core";
import {Manager} from '../../app/manager.service';
import {NavController, NavParams} from 'ionic-angular';
import {ShelterListPage} from '../shelterList/shelter.list.component';
import {AnimalListPage} from '../animalList/animal.list.component';
import {LoginPage} from '../login/login.component';
import {AddAnimalPage} from '../addAnimal/add.animal.component';

@Component({
  templateUrl: 'home.html',
  providers: [Manager]
})
export class HomePage {
  public user;
  public tekst: string;
  public logged: boolean = false;

  constructor(public manager: Manager, private nav: NavController, public navParams: NavParams) {
    this.logged = navParams.get('logged');
    this.user = navParams.get('user');
    this.manager.getDraggedProduct().then((droppedProduct: any) => { console.log('pobrany', droppedProduct) });

  }

  goToSheltersList() {
    this.nav.push(ShelterListPage);
  }

  goToAnimalsList() {
    this.nav.push(AnimalListPage);
  }

  goToLoginPage() {
    this.nav.push(LoginPage);
  }

  goToaddPage() {
    this.nav.push(AddAnimalPage, { logged: this.logged, user: this.user });
  }

  Logout() {
    this.manager.currentUser = undefined;
    this.nav.push(HomePage);
  }



}
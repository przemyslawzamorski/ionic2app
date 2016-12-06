import {Component} from "@angular/core";
import {Manager} from '../../app/manager.service';
import {NavController, NavParams} from 'ionic-angular';
import {ShelterListPage} from '../shelterList/shelter.list.component';
import {AnimalListPage} from '../animalList/animal.list.component';
import {LoginPage} from '../login/login.component';

@Component({
  templateUrl: 'home.html',
  providers: [Manager]
})
export class HomePage {
  public user;
  public tekst: string;
  private logged: boolean = false;

  constructor(private manager: Manager, private nav: NavController, private navParams: NavParams) {
    this.logged = navParams.get('logged');
    this.user = navParams.get('user');
    console.log(this.user);
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

  Logout() {
    this.manager.currentUser = undefined;
    this.nav.push(HomePage);
  }

  addTest() {
    this.manager.putt().subscribe(
      data => {
        console.log('dodałem', data);
      },
      err => console.log('error dodawania', err),
      () => console.log('getRepos completed')
    );
  }

}
import {Component} from "@angular/core";
import {Manager} from '../../app/manager.service';
import {NavController} from 'ionic-angular';
import {ShelterListPage} from '../shelterList/shelter.list.component';
import {DetailsPage} from '../details/details.component';

@Component({
  templateUrl: 'home.html',
  providers: [Manager]
})
export class HomePage {
  public foundRepos;
  public username;
  public log: boolean = false;
  public tekst: string;

  constructor(private manager: Manager, private nav: NavController) {
  }

  goToSheltersList() {
    this.nav.push(ShelterListPage);
  }

  goToAnimalsList() {
    this.nav.push(DetailsPage);
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
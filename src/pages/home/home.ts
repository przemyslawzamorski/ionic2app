import {Component} from "@angular/core";
import {Manager} from '../../app/manager.service';
import {NavController} from 'ionic-angular';
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

  getRepos() {
    // this.manager.getRepos(this.username).subscribe(
    //   data => {
    //     this.foundRepos = data.json();
    //   },
    //   err => console.error(err),
    //   () => console.log('getRepos completed')
    // );
  }

  getSheltersList() {
    this.manager.getData().subscribe(
      (data: any) => {
        console.log('data', data.json());
        this.log = true;
        this.tekst = data;
      },
      err => { this.tekst = err; console.error(err) },
      () => console.log('getRepos completed')
    );
  }

  goToDetails(repo) {
    this.nav.push(DetailsPage, { repo: repo });
  }
}
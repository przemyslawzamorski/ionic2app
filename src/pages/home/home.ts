import {Component} from "@angular/core";
import {GitHubService} from '../../app/github.service';
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details.component';

@Component({
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;
  public log: boolean = false;
  public tekst: string;


  constructor(private github: GitHubService, private nav: NavController) {
  }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }

  getdata() {
    this.github.getData().subscribe(
      (data: any) => {
        console.log('data', data);
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
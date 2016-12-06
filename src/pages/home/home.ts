import {Component, DoCheck} from "@angular/core";
import {Manager} from '../../app/manager.service';
import {NavController, NavParams} from 'ionic-angular';
import {ShelterListPage} from '../shelterList/shelter.list.component';
import {AnimalListPage} from '../animalList/animal.list.component';
import {LoginPage} from '../login/login.component';
import {AddAnimalPage} from '../addAnimal/add.animal.component';
import {QuestionPage} from '../questionList/question.list.component';


@Component({
  templateUrl: 'home.html',
  providers: [Manager]
})
export class HomePage implements DoCheck {
  public user;
  public tekst: string;
  public logged: boolean = false;
  public checkAuths: boolean = true;
  public staff: boolean = false;

  constructor(public manager: Manager, private nav: NavController, public navParams: NavParams) {
    this.manager.getDraggedProduct().then((droppedProduct: any) => {
      console.log('pobrany', droppedProduct);
      this.user = droppedProduct[0];
      console.log('sets user', this.user);
      if (this.user) {
        this.logged = this.user.logged;
        this.staff = this.user.isStaff;
        console.log('set', this.staff);
      }
    });

  }

  ionViewWillEnter() {
    this.checkAuths = true;
  }

  ngDoCheck() {

    if (this.checkAuths) {
      console.log('check');
      this.manager.getDraggedProduct().then((droppedProduct: any) => {
        console.log('pobrany', droppedProduct);
        this.user = droppedProduct[0];
        console.log('sets user', this.user);
        if (this.user) {
          this.logged = this.user.logged;
          this.staff = this.user.isStaff;

          console.log('set', this.staff);
        }
      });
      this.checkAuths = false;
    }
  }

  goToSheltersList() {
    this.nav.push(ShelterListPage);
  }

  goToAnimalsList() {
    this.nav.push(AnimalListPage);
  }

  goToLoginPage() {
    this.nav.push(LoginPage);
    // this.checkAuths = true;
  }

  goToaddPage() {
    this.nav.push(AddAnimalPage, { logged: this.logged, user: this.user });
  }

  Logout() {
    this.manager.currentUser = undefined;
    this.manager.resetDragableProduct();
    this.user = undefined;
    this.staff = false;
    this.logged = false;

  }

  goToQuestions() {
    this.nav.push(QuestionPage);
  }
}
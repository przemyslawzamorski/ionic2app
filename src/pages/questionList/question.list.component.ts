import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Manager} from '../../app/manager.service';
import {HomePage} from '../home/home';


@Component({
    templateUrl: 'questionList.html',
    providers: [Manager]
})
export class QuestionPage {

    public questionList: any[]
    public erroMessage: string;
    public serverShort: string = "https://adoptuj-pupila.herokuapp.com";
    public badPass: boolean = false;
    public user;

    constructor(public manager: Manager,
        private nav: NavController,
        private navParams: NavParams) {

        this.manager.getDraggedProduct().then((droppedProduct: any) => {
            console.log('pobrany', droppedProduct);
            this.user = droppedProduct[0];
            console.log('sets user', this.user);

            this.manager.getQuestions(this.user.login, this.user.pass, this.user.logged, this.user.id, this.user.isStuff).subscribe(
                (questions: any) => {
                    console.log('questions', questions.json());
                    this.questionList = questions.json()
                },
                err => { ; console.error(err) },
                () => console.log('qestion get completed')
            );

        });
    }
}
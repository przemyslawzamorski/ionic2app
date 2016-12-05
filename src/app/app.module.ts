import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ShelterListPage } from '../pages/shelterList/shelter.list.component';
import {ShelterDetailPage} from  '../pages/shelterDetails/shelter.detail.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShelterListPage,
    ShelterDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShelterListPage,
    ShelterDetailPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

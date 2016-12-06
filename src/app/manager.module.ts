import {Manager} from "./manager.service";
import { NgModule, ModuleWithProviders } from '@angular/core';

/**
 * Created by Piotr on 2016-10-18.
 */

@NgModule({})

export class ManagerModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ManagerModule,
            providers: [Manager]
        };
    }

}

import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {User} from './user.class';
import {authentifi} from './authentifics.cons';


@Injectable()
export class Manager {
    constructor(private http: Http) {
    }

    public serverAdress: string = 'https://adoptuj-pupila.herokuapp.com/pl/api/v1/';
    public isLogged: boolean;
    public currentUser: User;

    getShelterList() {
        return this.http.get(this.serverAdress + 'shelters/?format=json');
    }

    getAnimalsList(login: string, pass: string) {
        this.currentUser = new User(login, pass, false);
        var Myheaders: Headers;
        Myheaders = new Headers();
        this.currentUser.setHttpHeader(Myheaders);
        return this.http.get(this.serverAdress + 'animals/?format=json', { headers: Myheaders });
    }

    getAnimalsForShelter(shelterId: number) {
        return this.http.get(this.serverAdress + 'shelters/' + shelterId + '/animals/?format=json');
    }

    public setUser(login: string, pass: string) {
        this.currentUser = new User(login, pass, false);
        var Myheaders: Headers;
        Myheaders = new Headers();
        this.currentUser.setHttpHeader(Myheaders);
        return this.http.get(this.serverAdress + 'auth/test/?format=json', { headers: Myheaders });
    }

    dodajPupila(user: any, name: any, age: any, shelter: any, type: any, description: any, gender: any) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var authheader = 'Basic ' + btoa(user.login + ':' + user.pass);
        headers.delete('Authorization');
        headers.append('Authorization', authheader);

        var jsonBody = {
            "age": age,
            "name": name,
            "shelter": parseInt(shelter),
            "slug": name + '-' + shelter + '_1' + type,
            "description": description,
            "type": type,
            "gender": gender
        };
        console.log('jsonBody', jsonBody);

        let body = JSON.stringify(jsonBody);
        let options = new RequestOptions({ headers: headers });
        return this.http.put('https://adoptuj-pupila.herokuapp.com/pl/api/v1/animals/', body, options);
    }

    getDraggedProduct() {
        return Promise.resolve(authentifi);
    }

    insertDraggedProduct(product: any) {
        return Promise.resolve(authentifi).then((draggedProduct: any[]) => draggedProduct.push(product));
    }

    resetDragableProduct() {
        console.log('czyszcze dragged');
        return Promise.resolve(authentifi).then((draggedProduct: any) => draggedProduct.length = 0);
    }
}



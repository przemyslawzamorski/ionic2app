import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {User} from './user.class'

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

    getAnimalsList() {
        return this.http.get(this.serverAdress + 'animals/?format=json');
    }

    getAnimalsForShelter(shelterId: number) {
        return this.http.get(this.serverAdress + 'shelters/' + shelterId + '/animals/?format=json');
    }

    public setUser(login: string, pass: string) {
        this.currentUser = undefined;
        this.currentUser = new User(login, pass);
        var Myheaders: Headers;
        Myheaders = new Headers();
        this.currentUser.setHttpHeader(Myheaders);
        return this.http.get(this.serverAdress + 'auth/test/?format=json', { headers: Myheaders });
    }

    putt() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        var authheader = 'Basic ' + btoa('jacob:njjwpjkm');
        headers.delete('Authorization');
        headers.append('Authorization', authheader);

        var jsonBody = {
            "age": 12,
            "name": 'anal',
            "shelter": 6,
            "slug": 'anal-kuba-cwikowski'
            // "description": 'pierdolony describe którego nie ma w wymaganych parametrach bicz'

        };

        let body = JSON.stringify(jsonBody);
        let options = new RequestOptions({ headers: headers });
        return this.http.put('https://adoptuj-pupila.herokuapp.com/pl/api/v1/animals/', body, options);
    }
}



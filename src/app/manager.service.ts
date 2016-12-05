import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class Manager {
    constructor(private http: Http) {
    }

    public serverAdress: string = 'https://adoptuj-pupila.herokuapp.com/pl/api/v1/'

    getShelterList() {
        return this.http.get(this.serverAdress + 'shelters/?format=json');
    }

    getAnimalsForShelter(shelterId: number) {
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': "*"
        // });
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', "*");

        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        headers.append("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        console.log('header', headers);
        // return this.http.get(this.serverAdress +shelterId+ '/animals/?format=json', { headers: headers });
        return this.http.get(`/assets/animalsForShelter.json`, { headers: headers });

    }

    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.VERSION.html');

        return this.http.get(`${repo.url}/readme`, { headers: headers });
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



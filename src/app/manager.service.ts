import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class Manager {
    constructor(private http: Http) {
    }

    public serverAdress: string = 'https://adoptuj-pupila.herokuapp.com/pl/api/v1/'

    getShelterList() {
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
        // return this.http.get(this.serverAdress + 'shelters/?format=json', { headers: headers });
        return this.http.get(`/assets/shelters.json`, { headers: headers });
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


}
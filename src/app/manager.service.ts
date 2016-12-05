import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class Manager {
    constructor(private http: Http) {
    }

    // getRepos(username) {
    //     let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    //     return repos;
    // }

    getShelterList() {
        let headers = new Headers({
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': "*"
        });
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', "*"); 

        return this.http.get(`/assets/shelters.json`, { headers: headers });
    }

    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.VERSION.html');

        return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
}
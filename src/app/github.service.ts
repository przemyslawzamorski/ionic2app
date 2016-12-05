import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GitHubService {
    constructor(private http: Http) {
    }

    getRepos(username) {
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        return repos;
    }

    getData() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*"

        });
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // headers.append('Access-Control-Allow-Origin', "*"); 

        return this.http.get(`http://adoptuj-pupila.herokuapp.com/pl/api/v1/shelters/`, { headers: headers });
    }

    getDetails(repo) {
        let headers = new Headers();
        headers.append('Accept', 'application/vnd.github.VERSION.html');

        return this.http.get(`${repo.url}/readme`, { headers: headers });
    }
}
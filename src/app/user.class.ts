import {Headers} from "@angular/http";


export class User {
    constructor(public login: string, public pass: string) { };
    setHttpHeader(headers: Headers) {
        var authheader = 'Basic ' + btoa(this.login + ':' + this.pass);
        headers.delete('Authorization');
        headers.append('Authorization', authheader);

    }
}

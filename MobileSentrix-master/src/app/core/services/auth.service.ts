import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    //environment.apiurl
    constructor(public http: HttpClient) {

    }
    authenticateUser(username: string, password: string) {
        let authUrl = environment.apiurl + '/integration/admin/token?username=' + username + '&password=' + password;
        this.http.post(authUrl, null).subscribe((response) => {
            debugger;
        })
    }
}
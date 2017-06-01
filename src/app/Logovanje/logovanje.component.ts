/**
 * Created by Jelena on 1.6.2017.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './logovanje.component.html'
})

export class LoginComponent {
    log = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
    http: Http;
    router: Router;
    data: string;

    constructor(http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }

    logovanje(): void {
        this.data = 'username=' + this.log.value.username + '&password=' + this.log.value.password;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/login.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe( data => {
                    let obj = JSON.parse(data['_body']);
                    localStorage.setItem('token', obj.token);
                    alert('Uspeh!');
                    this.router.navigate(['']);
                },
                err => {
                    alert('Nesto vam ne radi');
                    let obj = JSON.parse(err._body);
                    let element = <HTMLElement>document.getElementsByClassName('alert')[0];
                    element.style.display = 'block';
                    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                }
            );
    }

}
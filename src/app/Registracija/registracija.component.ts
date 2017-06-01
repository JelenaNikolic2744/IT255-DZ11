/**
 * Created by Jelena on 1.6.2017.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'registracija',
    templateUrl: `./registracija.component.html`,
})

export class RegistracijaComponent {

    http: Http;
    router: Router;
    data: string;

    forma = new FormGroup({
        username: new FormControl(),
        password: new FormControl()
    });
    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }

    }
    reg(): void {
        this.data = 'username=' + this.forma.value.username + '&password=' + this.forma.value.password ;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/registracija.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe(data => {
                    console.log(data);
                    let obj = JSON.parse(data['_body']);
                    localStorage.setItem('token', obj.token);
                    alert('Uspesno ste se registrovali!');
                    this.router.navigate(['']);
                },
                err => {
                    alert('Desila se greska');
                    let obj = JSON.parse(err._body);
                    let element  = <HTMLElement> document.getElementsByClassName('alert')[0];
                    element.style.display = 'block';
                    element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
                }
            );
    }
}
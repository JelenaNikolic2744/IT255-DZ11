/**
 * Created by Jelena on 11.5.2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'koreografija',
    templateUrl: './koreografija.component.html'
})

export class KoreografijaComponent  {
    http: Http;
    router: Router;
    data: string;
    headers: Headers;
    postResponse: Response;

    dodajKoreo = new FormGroup({
        ime: new FormControl(),
        koreograf: new FormControl()
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }

    dodajKoreografiju(): void {
        this.data = 'Ime=' + this.dodajKoreo.value.ime + '&Koreograf=' + this.dodajKoreo.value.koreograf;
        this.headers = new Headers();
        this.headers.append('token', localStorage.getItem('token'));
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/dodaj.php', this.data, { headers: this.headers })
            .map(res => res)
            .subscribe( data => this.postResponse = data,
                err => alert(JSON.stringify(err)), () => {
                    if (this.postResponse['_body'].indexOf('error') === -1) {
                        this.router.navigate(['']);
                    }else {
                        alert('Greska');
                    }
                }
            );
        alert('Uspesan unos koreografije!');
    }
}

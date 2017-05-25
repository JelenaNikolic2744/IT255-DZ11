/**
 * Created by Jelena on 11.5.2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
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

    dodajKoreo = new FormGroup({
        Ime: new FormControl(),
        Koreograf: new FormControl()
    });

    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;
    }

    dodajKoreografiju(): void {
        this.data = 'Ime=' + this.dodajKoreo.value.Ime + '&Koreograf=' + this.dodajKoreo.value.Koreograf;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/dodaj.php', this.data, { headers: this.headers })
            .subscribe(
                data => {
                    if (data['_body'] === 'ok') {
                        this.router.navigate(['']);
                    }
                }
            );
        alert('Koreografija uneta :)');
    }
}
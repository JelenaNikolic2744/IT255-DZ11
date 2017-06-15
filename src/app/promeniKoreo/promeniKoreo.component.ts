/**
 * Created by Jelena on 14.6.2017.
 */

import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'promeniKoreo',
    templateUrl: `./promeniKoreo.component.html`,
})

export class PromeniKoreoComponent {
    http: Http;
    router: Router;
    postResponse: Response;
    route: ActivatedRoute;
    data: string;

    promeniKoreoForm = new FormGroup({
        ime: new FormControl(),
        koreograf: new FormControl()
    });

    constructor(route: ActivatedRoute, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }

    izmeni(): void {
        this.route.params.subscribe((params: Params) => {
                let id = params['ID'];
                let headers = new Headers();
                this.data = 'ID=' + id + '&Ime=' + this.promeniKoreoForm.value.name + '&Koreograf=' + this.promeniKoreoForm.value.price;
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                headers.append('token', localStorage.getItem('token'));
                this.http.post('http://localhost/php/promeniKoreo.php', this.data, { headers: headers })
                    .map(res => res)
                    .subscribe( data => this.postResponse = data,
                        err => alert(JSON.stringify(err)), () => {
                            if (this.postResponse['_body'].indexOf('error') === -1) {
                                this.router.navigate(['']);
                            }else {
                                alert('Nije uspelo');
                            }
                        }
                    );
            }
        );
    }

    vratiNazad() {
        this.router.navigate(['/desavanja']);
    }
}
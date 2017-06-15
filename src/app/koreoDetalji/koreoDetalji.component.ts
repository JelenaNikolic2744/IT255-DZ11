/**
 * Created by Jelena on 14.6.2017.
 */

import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
    selector: 'KoreoDetalji',
    templateUrl: './koreoDetalji.component.html',
})
export class KoreoDetaljiComponent {
    http: Http;
    router: Router;
    route: ActivatedRoute;
    data: Object[];

    constructor(route: ActivatedRoute, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null){
            this.router.navigate(['']);
        }
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            let id = params['ID'];
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            this.http.get('http://localhost/php/uzmiKoreo.php?ID=' + id, {headers: headers}).map(res => res.json()).share()
                .subscribe(data => {
                        this.data = data.red;
                    },
                    err => {
                        this.router.navigate(['./']);
                    }
                );
        });
    }

    vratiNazad() {
        this.router.navigate(['/desavanja']);
    }

}

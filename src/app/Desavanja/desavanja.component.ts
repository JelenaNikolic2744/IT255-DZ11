/**
 * Created by Jelena on 11.5.2017.
 */
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({
    selector: 'desavanja',
    templateUrl: './desavanja.component.html'
})

export class DesavanjaComponent {
    private data: Object[];
    private router: Router;
    headers: Headers;

    constructor(private http: Http, router: Router) {
        this.router = router;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/php/desavanja.php', {headers: this.headers})
            .map(res => res.json()).share()
            .subscribe(data => {
                    this.data = data;
                },
                err => {
                    this.router.navigate(['./']);
                }
            );
    }
    public brisi(event: Event, item: Number) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('token', localStorage.getItem('token'));
        this.http.get('http://localhost/php/brisi.php?ID=' + item, {headers: this.headers}) .subscribe( data => {
            event.srcElement.parentElement.parentElement.remove();
        });
    }
    public uzmiKoreo(item: Number) {
        this.router.navigate(['/koreoDetalji', item]);
    }

    public promeniKoreo(item: Number) {
        this.router.navigate(['/promeniKoreo', item]);
    }
}

/**
 * Created by Jelena on 11.5.2017.
 */
import { Component } from '@angular/core';
import { Http } from '@angular/http';


@Component({
    selector: 'desavanja',
    templateUrl: './desavanja.component.html'
})

export class DesavanjaComponent {
    private data: string;

    constructor(private http: Http ) {
    }

    ngOnInit () {
        this.getData();
    }

    getData() {
        this.http.get('http://localhost/php/php.php')
            .subscribe(res => this.data = res.json());
    }
}

/**
 * Created by Jelena on 11.5.2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'hd-com',
    templateUrl: './header.component.html'
})

export class HeaderComponent  {
    router: Router;
    isAuth: String;
    currentUrl: String;

    constructor(router: Router) {
        this.router = router;
        this.currentUrl = '';
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (localStorage.getItem('token') !== null) {
                this.isAuth = 'yes';
            }else {
                this.isAuth = 'no';
            }
        });
    }
    izloguj(): void {
        alert('Izlogovani ste');
        localStorage.removeItem('token');
        this.router.navigate(['']);
        if (localStorage.getItem('token') !== null) {
            this.isAuth = 'yes';
        }else{
            this.isAuth = 'no';
        }
    }
}

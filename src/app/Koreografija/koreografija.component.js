"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Jelena on 11.5.2017.
 */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var KoreografijaComponent = (function () {
    function KoreografijaComponent(http, router) {
        this.dodajKoreo = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            koreograf: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }
    KoreografijaComponent.prototype.dodajKoreografiju = function () {
        var _this = this;
        this.data = 'Ime=' + this.dodajKoreo.value.ime + '&Koreograf=' + this.dodajKoreo.value.koreograf;
        this.headers = new http_1.Headers();
        this.headers.append('token', localStorage.getItem('token'));
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/dodaj.php', this.data, { headers: this.headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
            if (_this.postResponse['_body'].indexOf('error') === -1) {
                _this.router.navigate(['']);
            }
            else {
                alert('Greska');
            }
        });
        alert('Uspesan unos koreografije!');
    };
    return KoreografijaComponent;
}());
KoreografijaComponent = __decorate([
    core_1.Component({
        selector: 'koreografija',
        templateUrl: './koreografija.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], KoreografijaComponent);
exports.KoreografijaComponent = KoreografijaComponent;
//# sourceMappingURL=koreografija.component.js.map
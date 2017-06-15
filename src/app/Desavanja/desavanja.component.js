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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var DesavanjaComponent = (function () {
    function DesavanjaComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('token', localStorage.getItem('token'));
        http.get('http://localhost/php/desavanja.php', { headers: this.headers })
            .map(function (res) { return res.json(); }).share()
            .subscribe(function (data) {
            _this.data = data;
        }, function (err) {
            _this.router.navigate(['./']);
        });
    }
    DesavanjaComponent.prototype.brisi = function (event, item) {
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.headers.append('token', localStorage.getItem('token'));
        this.http.get('http://localhost/php/brisi.php?ID=' + item, { headers: this.headers }).subscribe(function (data) {
            event.srcElement.parentElement.parentElement.remove();
        });
    };
    DesavanjaComponent.prototype.uzmiKoreo = function (item) {
        this.router.navigate(['/koreoDetalji', item]);
    };
    DesavanjaComponent.prototype.promeniKoreo = function (item) {
        this.router.navigate(['/promeniKoreo', item]);
    };
    return DesavanjaComponent;
}());
DesavanjaComponent = __decorate([
    core_1.Component({
        selector: 'desavanja',
        templateUrl: './desavanja.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], DesavanjaComponent);
exports.DesavanjaComponent = DesavanjaComponent;
//# sourceMappingURL=desavanja.component.js.map
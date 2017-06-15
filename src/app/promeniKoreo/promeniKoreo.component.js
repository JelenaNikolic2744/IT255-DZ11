/**
 * Created by Jelena on 14.6.2017.
 */
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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var PromeniKoreoComponent = (function () {
    function PromeniKoreoComponent(route, http, router) {
        this.promeniKoreoForm = new forms_1.FormGroup({
            ime: new forms_1.FormControl(),
            koreograf: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        this.route = route;
        if (localStorage.getItem('token') == null) {
            this.router.navigate(['']);
        }
    }
    PromeniKoreoComponent.prototype.izmeni = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['ID'];
            var headers = new http_1.Headers();
            _this.data = 'ID=' + id + '&Ime=' + _this.promeniKoreoForm.value.name + '&Koreograf=' + _this.promeniKoreoForm.value.price;
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            headers.append('token', localStorage.getItem('token'));
            _this.http.post('http://localhost/php/promeniKoreo.php', _this.data, { headers: headers })
                .map(function (res) { return res; })
                .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                if (_this.postResponse['_body'].indexOf('error') === -1) {
                    _this.router.navigate(['']);
                }
                else {
                    alert('Nije uspelo');
                }
            });
        });
    };
    PromeniKoreoComponent.prototype.vratiNazad = function () {
        this.router.navigate(['/desavanja']);
    };
    return PromeniKoreoComponent;
}());
PromeniKoreoComponent = __decorate([
    core_1.Component({
        selector: 'promeniKoreo',
        templateUrl: "./promeniKoreo.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http, router_1.Router])
], PromeniKoreoComponent);
exports.PromeniKoreoComponent = PromeniKoreoComponent;
//# sourceMappingURL=promeniKoreo.component.js.map
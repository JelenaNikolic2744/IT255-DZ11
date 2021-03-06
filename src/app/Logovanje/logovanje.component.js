/**
 * Created by Jelena on 1.6.2017.
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
var LoginComponent = (function () {
    function LoginComponent(http, router) {
        this.log = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }
    }
    LoginComponent.prototype.logovanje = function () {
        var _this = this;
        this.data = 'username=' + this.log.value.username + '&password=' + this.log.value.password;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/php/login.php', this.data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) {
            var obj = JSON.parse(data['_body']);
            localStorage.setItem('token', obj.token);
            alert('Uspeh!');
            _this.router.navigate(['']);
        }, function (err) {
            alert('Nesto vam ne radi');
            var obj = JSON.parse(err._body);
            var element = document.getElementsByClassName('alert')[0];
            element.style.display = 'block';
            element.innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\"').join('');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: './logovanje.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=logovanje.component.js.map
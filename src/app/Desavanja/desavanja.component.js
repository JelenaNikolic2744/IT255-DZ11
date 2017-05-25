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
var DesavanjaComponent = (function () {
    function DesavanjaComponent(http) {
        this.http = http;
    }
    DesavanjaComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    DesavanjaComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('http://localhost/php/php.php')
            .subscribe(function (res) { return _this.data = res.json(); });
    };
    return DesavanjaComponent;
}());
DesavanjaComponent = __decorate([
    core_1.Component({
        selector: 'desavanja',
        templateUrl: './desavanja.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DesavanjaComponent);
exports.DesavanjaComponent = DesavanjaComponent;
//# sourceMappingURL=desavanja.component.js.map
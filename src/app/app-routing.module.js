"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Jelena on 11.5.2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pocetna_component_1 = require("./pocetna/pocetna.component");
var koreografija_component_1 = require("./koreografija/koreografija.component");
var desavanja_component_1 = require("./desavanja/desavanja.component");
var kontakt_component_1 = require("./kontakt/kontakt.component");
var logovanje_component_1 = require("./Logovanje/logovanje.component");
var registracija_component_1 = require("./Registracija/registracija.component");
var promeniKoreo_component_1 = require("./promeniKoreo/promeniKoreo.component");
var koreoDetalji_component_1 = require("./koreoDetalji/koreoDetalji.component");
var routes = [
    { path: '', redirectTo: '/pocetna', pathMatch: 'full' },
    { path: 'pocetna', component: pocetna_component_1.PocetnaComponent },
    { path: 'koreografija', component: koreografija_component_1.KoreografijaComponent },
    { path: 'desavanja', component: desavanja_component_1.DesavanjaComponent },
    { path: 'kontakt', component: kontakt_component_1.KontaktComponent },
    { path: 'log', component: logovanje_component_1.LoginComponent },
    { path: 'reg', component: registracija_component_1.RegistracijaComponent },
    { path: 'promeniKoreo/:id', component: promeniKoreo_component_1.PromeniKoreoComponent },
    { path: 'koreoDetalji/:id', component: koreoDetalji_component_1.KoreoDetaljiComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
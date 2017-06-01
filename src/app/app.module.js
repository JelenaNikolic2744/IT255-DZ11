"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var pocetna_component_1 = require("./pocetna/pocetna.component");
var koreografija_component_1 = require("./koreografija/koreografija.component");
var desavanja_component_1 = require("./desavanja/desavanja.component");
var kontakt_component_1 = require("./kontakt/kontakt.component");
var desavanja_koreoime_1 = require("./desavanja/desavanja-koreoime");
var desavanja_koreokoreo_1 = require("./desavanja/desavanja-koreokoreo");
var logovanje_component_1 = require("./Logovanje/logovanje.component");
var registracija_component_1 = require("./Registracija/registracija.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, http_1.HttpModule, forms_1.ReactiveFormsModule],
        declarations: [app_component_1.AppComponent, header_component_1.HeaderComponent, pocetna_component_1.PocetnaComponent, koreografija_component_1.KoreografijaComponent, desavanja_component_1.DesavanjaComponent,
            kontakt_component_1.KontaktComponent, desavanja_koreoime_1.DesavanjaKoreoIme, desavanja_koreokoreo_1.DesavanjaKoreoKoreo, logovanje_component_1.LoginComponent, registracija_component_1.RegistracijaComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
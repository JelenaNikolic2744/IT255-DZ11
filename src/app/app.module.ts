import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { KoreografijaComponent } from './koreografija/koreografija.component';
import { DesavanjaComponent} from './desavanja/desavanja.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DesavanjaKoreoIme } from './desavanja/desavanja-koreoime';
import { DesavanjaKoreoKoreo } from './desavanja/desavanja-koreokoreo';
import { LoginComponent} from './Logovanje/logovanje.component';
import {RegistracijaComponent} from './Registracija/registracija.component';
import {KoreoDetaljiComponent} from './koreoDetalji/koreoDetalji.component';
import {PromeniKoreoComponent} from './promeniKoreo/promeniKoreo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HeaderComponent, PocetnaComponent, KoreografijaComponent, DesavanjaComponent,
                  KontaktComponent, DesavanjaKoreoIme, DesavanjaKoreoKoreo, LoginComponent, RegistracijaComponent,
                  KoreoDetaljiComponent, PromeniKoreoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

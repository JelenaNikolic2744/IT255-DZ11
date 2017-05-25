/**
 * Created by Jelena on 11.5.2017.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PocetnaComponent } from './pocetna/pocetna.component';
import { KoreografijaComponent } from './koreografija/koreografija.component';
import { DesavanjaComponent } from './desavanja/desavanja.component';
import { KontaktComponent} from './kontakt/kontakt.component';

const routes: Routes = [
  { path: '', redirectTo: '/pocetna', pathMatch: 'full'},
  { path: 'pocetna', component: PocetnaComponent},
  { path: 'koreografija', component: KoreografijaComponent},
  { path: 'desavanja', component: DesavanjaComponent},
  { path: 'kontakt', component: KontaktComponent}
]

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
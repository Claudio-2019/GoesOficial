import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CentroAyudaComponent } from './centro-ayuda/centro-ayuda.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { OficinaVirtualComponent } from './oficina-virtual/oficina-virtual.component';
import { VitrinaComponent } from './vitrina/vitrina.component';
import { SellosVerdesComponent } from './sellos-verdes/sellos-verdes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    CentroAyudaComponent,
    NoticiasComponent,
    OficinaVirtualComponent,
    VitrinaComponent,
    SellosVerdesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

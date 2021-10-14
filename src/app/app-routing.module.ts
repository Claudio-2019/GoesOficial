import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CentroAyudaComponent } from './centro-ayuda/centro-ayuda.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { OficinaVirtualComponent } from './oficina-virtual/oficina-virtual.component';
import { PodcastComponent } from './podcast/podcast.component';
import { SellosVerdesComponent } from './sellos-verdes/sellos-verdes.component';
import { VitrinaComponent } from './vitrina/vitrina.component';
import { WebinarsComponent } from './webinars/webinars.component';

const routes: Routes = [
  { path: 'Inicio', component: HomePageComponent },
  { path: 'Centro-Ayuda-Goes', component: CentroAyudaComponent },
  { path: 'Noticias-Goes', component: NoticiasComponent },
  { path: 'Oficinas-Virtuales', component: OficinaVirtualComponent },
  { path: 'Vitrina-Estudiantil', component: VitrinaComponent },
  { path: 'Sellos-Verdes', component: SellosVerdesComponent },
  { path: 'Podcast-Goes', component: PodcastComponent },
  { path: 'Webinars',component:WebinarsComponent},
  { path: '**', redirectTo: 'Inicio' },
  { path: '**', pathMatch: 'full', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

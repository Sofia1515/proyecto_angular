import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaPelisComponent } from './pelicula-pelis/pelicula-pelis.component';
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pelis',
    pathMatch: 'full',
  },
  {
    path: 'pelis',
    component: PeliculaPelisComponent,
  },
  {
    path: 'about',
    component: PeliculaAboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

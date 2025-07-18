import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliListComponent } from './peli-list/peli-list.component';
import { PeliCarritoComponent } from './peli-carrito/peli-carrito.component';

import { HttpClientModule } from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import { PeliculaPelisComponent } from './pelicula-pelis/pelicula-pelis.component';
import { PeliculaAboutComponent } from './pelicula-about/pelicula-about.component';
import { InputEnteroComponent } from './input-entero/input-entero.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliListComponent,
    PeliCarritoComponent,
    PeliculaPelisComponent,
    PeliculaAboutComponent,
    InputEnteroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

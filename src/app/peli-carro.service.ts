import { Injectable } from '@angular/core';
import { Peli } from './peli-list/peli';

@Injectable({
  providedIn: 'root'
})

//logica del carrito
export class PeliCarroService {

  carroLista: Peli[] = [];

  constructor() { }

  agregarAlCarro(peli: Peli) {
    this.carroLista.push(peli);
    console.log(this.carroLista.length);
  }

}

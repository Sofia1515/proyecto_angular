import { Injectable } from '@angular/core';
import { Peli } from './peli-list/peli';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

//logica del carrito
export class PeliCarroService {

  private _carroLista: Peli[] = [];

  carroLista: BehaviorSubject<Peli[]> = new BehaviorSubject<Peli[]>([]);

  constructor() { }

  agregarAlCarro(peli: Peli) {
    let item: Peli  | undefined = this._carroLista.find((v1) => v1.nombre == peli.nombre);
    if(!item){
      this._carroLista.push({ ... peli});
    } else {
      item.quantity += peli.quantity;
    }
    console.log(this._carroLista.length);
    this.carroLista.next(this._carroLista);
  }

}
/*tambien puedo poner 
let item: this.carroLista.find((v1) => v1.nombre == peli.nombre);
porque si la pelicula no existe controla el undefined, pero si siempre la pelicula va a existir
entonces : con un ! forzamos el ts*/

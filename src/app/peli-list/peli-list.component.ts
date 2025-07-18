import { Component, OnInit } from '@angular/core';
import { Peli } from './peli';
import { PeliCarroService } from '../peli-carro.service';

@Component({
  selector: 'app-peli-list',
  standalone: false,
  templateUrl: './peli-list.component.html',
  styleUrl: './peli-list.component.scss'
})
export class PeliListComponent{
  pelis: Peli[] = [
    {
    nombre : "Son como niños",
    genero : "Comedia",
    precio : 1200,
    stock : 0,
    imagen : "assets/img/comedia.jpeg",
    descuento : false,
    quantity: 0,
  },
  {
    nombre : "Ouija",
    genero : "Terror",
    precio : 1500,
    stock : 9,
    imagen : "assets/img/imagen_terror.jpg",
    descuento : true,
    quantity: 0,
  },
  {
    nombre : "Tres metros sobre el cielo",
    genero : "Romance",
    precio : 1450,
    stock : 3,
    imagen : "assets/img/romance.jpg",
    descuento : false,
    quantity: 0,
  }
];

  constructor(private carro: PeliCarroService){
  }

  ngOnInit(): void {
  }

  agregarAlCarro(peli: Peli): void {
    this.carro.agregarAlCarro(peli);
  }

  maxReached(mensaje: string): void {
  alert(mensaje); 
}


}

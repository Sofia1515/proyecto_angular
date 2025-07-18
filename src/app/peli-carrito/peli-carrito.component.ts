import { Component, OnInit } from '@angular/core';
import { PeliCarroService } from '../peli-carro.service';

@Component({
  selector: 'app-peli-carrito',
  standalone: false,
  templateUrl: './peli-carrito.component.html',
  styleUrl: './peli-carrito.component.scss'
})
export class PeliCarritoComponent implements OnInit{

  constructor(private carro: PeliCarroService){
  }



  ngOnInit(): void { }

}

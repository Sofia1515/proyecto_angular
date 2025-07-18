import { Component, OnInit } from '@angular/core';
import { PeliCarroService } from '../peli-carro.service';
import { Peli } from '../peli-list/peli';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-peli-carrito',
  standalone: false,
  templateUrl: './peli-carrito.component.html',
  styleUrl: './peli-carrito.component.scss'
})
export class PeliCarritoComponent implements OnInit{

  carroLista$: Observable<Peli[]>;

  constructor(private carro: PeliCarroService){
    this.carroLista$ = carro.carroLista.asObservable();
  }

   eliminar(peli: Peli): void {
    this.carro.restarCant(peli);
  }





  ngOnInit(): void { }

}

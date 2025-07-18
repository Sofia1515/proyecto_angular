import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peli } from '../peli-list/peli';

@Component({
  selector: 'app-input-entero',
  standalone: false,
  templateUrl: './input-entero.component.html',
  styleUrl: './input-entero.component.scss'
})
export class InputEnteroComponent {
  constructor(){ }

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string>= new EventEmitter<string>();

  
  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } 
    else
      this.maxReached.emit("no mas peliculas disponibles");
  }

  downQuantity(): void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity); 
  }

  changeQuantity(event: KeyboardEvent): void {
    console.log(event.key);
    this.quantityChange.emit(this.quantity);

  }
}
//paso como parametro event: KeyboardEvent, ya que no me deja usar la variable global event por que
//dice que es peligroso, por razones técnicas y tambien de buena práctica que afectan directamente a 
//la calidad, mantenimiento y estabilidad de tu código en Angular y TypeScript.

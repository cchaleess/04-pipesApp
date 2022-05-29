import { Component, OnInit } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayuscula: boolean = false;

  ordenarPor: string = "";

  heroes: Heroes[] = [
    {
    nombre: 'Aquaman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.azul
  },
  {
    nombre: 'Flash',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Green Lantern',
    vuela: true,
    color: Color.verde
  },
  {
    nombre: 'Superman',
    vuela: true,
    color: Color.rojo
  }
];

  cambiarMayusculas() {    
    this.enMayuscula = !this.enMayuscula;
  }
  
  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    console.log(valor);
  }


  constructor() { }

 
}

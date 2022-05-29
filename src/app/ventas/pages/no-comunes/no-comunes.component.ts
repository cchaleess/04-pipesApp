import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18n select
  nombre: string = 'Juan';
  genero: string = 'masculino'; //debe coincidir con invitacionMapa

  invitacionMapa = {
    'femenino': 'saludarla',
    'masculino': 'saludarlo',
    'otro': 'saludarle'
  };
  //i18n Plural
  clientes: string[] = ['Juan', 'Pedro', 'Ana', 'María', 'José'];
  clientesMapa = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'hay # clientes esperando'
  };
  
  cambiarCliente() {
    this.nombre = 'Sol';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Juan Perez',
    direccion: 'Ottawa, Canada',
    edad: 23
  };
  //Json Pipe
  heroes = [
    { nombre: 'Aquaman', vuela: false, edad: 23 },
    { nombre: 'Batman', vuela: true, edad: 25 },
    { nombre: 'Flash', vuela: false, edad: 24 },
  ]
  //AsyncPipe
  miObservable = interval(1000);//0,1,2,3,4,5...
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay data de promesa');
    }, 3000);
  }
  );

  constructor() { }

  
  
}

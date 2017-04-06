/**
 * Created by root on 6/04/17.
 */

import { ListaItem } from './lista-item'

export class Lista{
  nombre : string;
  terminada: boolean;
  items : ListaItem [];



  constructor(nombre : string){
    this.nombre = nombre;
    this.terminada = false;
  }

}

/**
 * Created by root on 6/04/17.
 */
import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';

@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

    constructor() {
      this.cargarData();
    }


    actuzalizarData(){
      localStorage.setItem("data",JSON.stringify(this.listas));
    }

    cargarData() {

      if(localStorage.getItem("data"))
        this.listas = JSON.parse(localStorage.getItem("data"));
    }

    agregarLista(lista: Lista){
      this.listas.push(lista);
    }

    eliminarLista(idx:number){
      this.listas.splice(idx,1);
      this.actuzalizarData();
    }
}

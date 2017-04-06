/**
 * Created by root on 5/04/17.
 */
import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from "../../app/services/lista-deseos.service";

import { NavController } from 'ionic-angular';
import {AgregarComponent} from "../agregar/agregar.component";
import {DetalleComponent} from "../detalle/detalle.component";
@Component({
    selector: 'app-terminados',
    templateUrl: 'terminados.component.html'
})
export class TerminadosComponent implements OnInit {
    constructor(private _listaDeseos : ListaDeseosService,private navCtrl : NavController) { }

    ngOnInit() { }

  irAgregar(){
    this.navCtrl.push(AgregarComponent);
  }


  verDetalle(lista, index){
    this.navCtrl.push(DetalleComponent,{lista:lista,index});
  }

}

/**
 * Created by root on 6/04/17.
 */
import { Component, OnInit } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { ListaItem } from '../../app/clases/lista-item';
import {  ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector: 'app-detalle',
    templateUrl: 'detalle.component.html'
})
export class DetalleComponent implements OnInit {

  idx: number;
  lista: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public _listaDeseos: ListaDeseosService,
              public alertCtrl: AlertController) {

    this.idx = this.navParams.get("indice");
    this.lista = this.navParams.get("lista");

    console.log(this.navParams)

  }

  ngOnInit() {
  }


  actualizar(item: ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;
    for(let item of this.lista.items){
      if(!item.completado){
        todosMarcados = false;
        break;
      }
    }

    this.lista.terminada = todosMarcados;

    this._listaDeseos.actuzalizarData()
  }

  borrarItem(){

    let confirm = this.alertCtrl.create({
      title: this.lista.nombreLista,
      message: 'Está seguro de que quiere borrar las lista?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {

          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this._listaDeseos.eliminarLista(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}

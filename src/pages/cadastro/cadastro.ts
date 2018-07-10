import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import { Atividade } from '../../modelo/atividade';
import { Storage } from '@ionic/storage';
//import { Database } from '../../data/database';
/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  atividade: Atividade = new Atividade();
  atividades:Atividade[] = [];


  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrarAtividade(){
    this.storage.get('listAtividades').then((data) =>{
      //console.log("dataaaaa: "+data);
      if (data==null){
        //console.log("no null");
        this.atividades.push(this.atividade);
        this.storage.set('listAtividades', this.atividades);
      //return this.atividades;
      } else {
        //console.log("no elseeeeee::: "+data[0].descricao);
        data.push(this.atividade);
        this.storage.set('listAtividades', data);
        //return data;
      }
      this.navCtrl.pop();
    });

      //this.storage.remove("listAtividades");
    //this.atividades = this.buscarListaAtividades();
    //console.log("aquiii");
    //this.atividades.push(this.atividade);
    //this.storage.set('listAtividades', this.atividades);

  }

  cancelarOperacao(){
  this.navCtrl.pop();
  }
  /*buscarListaAtividades():Atividade[]{

  }*/

  //---------------------------------------------------------------------
}

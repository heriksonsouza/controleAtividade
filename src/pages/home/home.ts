import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Atividade } from '../../modelo/atividade';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
atividades:Atividade[];

  constructor(public navCtrl: NavController, public storage: Storage) {
    //this.buscarListaAtividades();
    //this.atividades = this.buscarListaAtividades();
    this.buscarListaAtividades();
  }

  buscarListaAtividades(){
    this.storage.get('listAtividades').then((data) =>{
      if (data==null){
        this.atividades = [];
      }else{
        this.atividades = data;
      }
    });
  }

  chamarCadastroPage(){
    this.navCtrl.push(CadastroPage);
  }

}

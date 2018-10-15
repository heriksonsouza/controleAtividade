import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Atividade } from '../../modelo/atividade';
import {EditarPage} from '../editar/editar';
import {AtividadeService} from '../../service/atividade.service';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
//import * as firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private atividade: Atividade = new Atividade();
  items: Observable<Atividade[]>

  /*
  atividade: Atividade = new Atividade();
  ref = firebase.database().ref("atividade/");
  atividades = [];
  //atividades:Atividade[] = [];
*/

  constructor(public navCtrl: NavController, private atividadeService: AtividadeService) {
this.items = this.atividadeService.getAtividades().valueChanges();

/*
    this.ref.on('value', resp =>{
      this.atividades = [];
      this.atividades = snapshotToArray(resp);

    });
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrarAtividade(){
    this.atividadeService.addAtividade(this.atividade);
/*
    let novoAtividade = this.ref.push();
    novoAtividade.set(this.atividade);
*/
  }

  editarRemover(atividadeEditarRemover: Atividade){
    this.navCtrl.push(EditarPage, {atividade: atividadeEditarRemover});
  }

  cancelarOperacao(){
    this.navCtrl.pop();
  }
  /*buscarListaAtividades():Atividade[]{

}*/

//---------------------------------------------------------------------
}

export const snapshotToArray = snapshot => {
  var returnArr = [];

  snapshot.forEach(function(childSnapshot) {
    var item = childSnapshot.val();
    item.key = childSnapshot.key;

    returnArr.push(item);
  });

  return returnArr;
};

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Atividade} from '../../modelo/atividade';
import {AtividadeService} from '../../service/atividade.service';

import { AdMobFree, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html',
})
export class EditarPage {
  private atividade: Atividade = new Atividade();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public atividadeService: AtividadeService, private admobFree: AdMobFree) {
      this.atividade = this.navParams.get("atividade");
      this.mostrarPublicidadeInterstitial();
    }

    mostrarPublicidadeInterstitial (){
      const interstitialConfig: AdMobFreeInterstitialConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        id: 'ca-app-pub-3086827343473769/1909705325',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.interstitial.config(interstitialConfig);
      this.admobFree.interstitial.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad EditarPage');
    }

    alterarAtividade(){
      this.atividadeService.updateAtividade(this.atividade);
      this.navCtrl.pop();
    }

    removerAtividade(){
      this.atividadeService.removerAtividade(this.atividade);
      this.navCtrl.pop();
    }

    cancelarOperacao(){
      this.navCtrl.pop();
    }

  }

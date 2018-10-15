import { Component } from '@angular/core';
//import { Storage } from '@ionic/storage';
import { NavController, Platform } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { Atividade } from '../../modelo/atividade';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  atividades = [];

  constructor(public navCtrl: NavController,
    private admobFree: AdMobFree, private platform: Platform) {
      this.mostrarPublicidadeBanner();
    }

    mostrarPublicidadeBanner (){
      const bannerConfig: AdMobFreeBannerConfig = {
        // add your config here
        // for the sake of this example we will just use the test config
        id: 'ca-app-pub-3086827343473769/1909705325',
        isTesting: true,
        autoShow: true
      };
      this.admobFree.banner.config(bannerConfig);

      this.admobFree.banner.prepare()
      .then(() => {
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => console.log(e));

    }
    /*
    buscarListaAtividades(){
    this.storage.get('listAtividades').then((data) =>{
    if (data==null){
    this.atividades = [];
  }else{
  this.atividades = data;
}
});
}
*/

chamarCadastroPage(){
  this.navCtrl.push(CadastroPage);
}

}

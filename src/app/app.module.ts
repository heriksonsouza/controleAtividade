import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { CadastroPage } from '../pages/cadastro/cadastro';
import {EditarPage} from '../pages/editar/editar';
import { TabsPage } from '../pages/tabs/tabs';
import {AtividadeService} from '../service/atividade.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { AdMobFree } from '@ionic-native/admob-free';

const config = {
  apiKey: "AIzaSyB14xRVrrGwatyMFXU-GVJKvEgB_dX7wcA",
  authDomain: "controleatividades-a4922.firebaseapp.com",
  databaseURL: "https://controleatividades-a4922.firebaseio.com",
  projectId: "controleatividades-a4922",
  storageBucket: "controleatividades-a4922.appspot.com",
  messagingSenderId: "226885259623"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    CadastroPage,
    EditarPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    CadastroPage,
    EditarPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AtividadeService,
    AdMobFree
  ]
})
export class AppModule { }

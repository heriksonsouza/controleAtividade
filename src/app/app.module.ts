import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { HttpModule } from '@angular/http';
//import { SQLite } from '@ionic-native/sqlite';
//import { Database } from '../data/database'
import { IonicStorageModule } from '@ionic/storage';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    CadastroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    ContactPage,
    CadastroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //SQLite,
    //Database,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB14xRVrrGwatyMFXU-GVJKvEgB_dX7wcA",
  authDomain: "controleatividades-a4922.firebaseapp.com",
  databaseURL: "https://controleatividades-a4922.firebaseio.com",
  projectId: "controleatividades-a4922",
  storageBucket: "controleatividades-a4922.appspot.com",
  messagingSenderId: "226885259623"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}

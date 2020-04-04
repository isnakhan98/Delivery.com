import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { timer } from 'rxjs/observable/timer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//zz import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/sign-in/sign-in';

import { MePage } from '../pages/me/me';
import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpFeedbackPage } from '../pages/help-feedback/help-feedback';
import { SelectionPage } from '../pages/selection/selection';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = SignInPage;
  signin = SignInPage;
mepage=MePage;
homepage=SelectionPage;
AboutusPage=AboutUsPage;
helpfeedbackpage=HelpFeedbackPage;

  @ViewChild('nav') nav: NavController;
  showSplash = true;

  constructor(platform: Platform, statusBar: StatusBar, private menuCtrl: MenuController, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false)
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }



}





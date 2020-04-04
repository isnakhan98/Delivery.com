import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SignInPage } from '../pages/sign-in/sign-in';
import { SelectionPage } from '../pages/selection/selection';
import { FoodPage } from '../pages/food/food';
import { ProductsPage } from '../pages/products/products';
import { DealsProvider } from '../providers/deals/deals';
import { DealsssPage } from '../pages/dealsss/dealsss';
import { ModalPage } from '../pages/modal/modal';
import { DescriptionPage } from '../pages/description/description';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { MePage } from '../pages/me/me';
import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpFeedbackPage } from '../pages/help-feedback/help-feedback';
// import { MapDirective } from '../components/map/map';
import{AgmCoreModule} from "angular2-google-maps/core";
// import{AgmCoreModule}  from 'ionic-angular';
// import { LoginProvider } from '../providers/login/login';
// import { HomePage } from '../pages/home/home';
 //import { MapComponent } from '../components/map/map';

import { ModuleWithProviders, InjectionToken } from '@angular/core';

@NgModule({
  declarations: [
    MyApp,
    // HomePage
    SignInPage,
    SelectionPage,
    //  MapDirective,
    //MapComponent,
    FoodPage,
    ProductsPage,
    DealsssPage,
    ModalPage,
    DescriptionPage,
     MePage,
    AboutUsPage,
    HelpFeedbackPage

  ],
  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp ),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCDYRaPanMfwnLDicEHgs3hbEeO8qGr_Tk'
    })
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    // HomePage
    SignInPage,
    ProductsPage,
    SelectionPage,
    FoodPage,
    DealsssPage,
    ModalPage,
    DescriptionPage,
    MePage,
    AboutUsPage,
    HelpFeedbackPage,
    //MapComponent,
    // MapDirective
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DealsProvider,
    // LoginProvider
    DealsProvider,
    LocalNotifications,
   
  ]
})
export class AppModule {}

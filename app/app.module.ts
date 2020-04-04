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

import { DescriptionPage } from '../pages/description/description';
import { ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MePage } from '../pages/me/me';
import { AboutUsPage } from '../pages/about-us/about-us';
import { HelpFeedbackPage } from '../pages/help-feedback/help-feedback';
//import{AgmCoreModule}  from 'angular2-google-maps/core';
import{AgmCoreModule}  from '@agm/core';
import { ModuleWithProviders, InjectionToken } from '@angular/core';
import { LocationPage } from '../pages/location/location';
import { CreateAccountPage } from '../pages/create-account/create-account';

import { HttpClientModule } from  '@angular/common/http';
import { OrderNowPage } from '../pages/order-now/order-now';

@NgModule({
  declarations: [
    MyApp,
    // HomePage
    SignInPage,
    SelectionPage,
     //MapComponent,
    FoodPage,
    OrderNowPage,
    ProductsPage,
    DealsssPage,
    DescriptionPage,
     MePage,
    AboutUsPage,
    HelpFeedbackPage,
    LocationPage,
    CreateAccountPage
    
  ],
  imports: [
    
    CommonModule,
    FormsModule,
    BrowserModule,
    IonicModule.forRoot(MyApp ),
    HttpClientModule
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyCDYRaPanMfwnLDicEHgs3hbEeO8qGr_Tk'
    // })
    
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
     SignInPage,
     OrderNowPage,
    ProductsPage,
    SelectionPage,
    FoodPage,
    DealsssPage,
    
  LocationPage,
    DescriptionPage,
    MePage,
    AboutUsPage,
    HelpFeedbackPage,
    CreateAccountPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DealsProvider,
    // LoginProvider
    DealsProvider,
    
     
  ],
  
})
export class AppModule {}

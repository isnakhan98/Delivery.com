import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationPage),
  ],
})

export class LocationPageModule {}



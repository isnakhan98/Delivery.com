import { Component,ElementRef,ViewChild } from '@angular/core';
import { ActionSheetController, ModalController } from 'ionic-angular'
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LocationPage } from '../location/location';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
  @Component({
  selector: 'page-products',
  templateUrl:'products.html'

 })


export class ProductsPage {

  baseUrl = "http://localhost:2000"
  location: string = '';
  destination: string = '';
  order:any=[];
 d:any=[];
constructor(public navParams: NavParams,private alertCtrl: AlertController,public http: HttpClient,private navCtrl:NavController,  public actionSheetCtrl: ActionSheetController,private modalCtrl:ModalController)
{//this.d=this.navParams.get('dealsObject');
}

onSubmit() {
  if (this.location && this.destination) {
    this.post();
  
  }
  else {
     console.log('Please add information');
    let alert = this.alertCtrl.create(
      {

  title:'enter again!',
        message: 'Please fill all the fields',
        buttons: ['okay']
      }
    );
     alert.present();

   }

}
post() {
  let body =
  {
    'location': this.location,
    'destination': this.destination,
  
  }
  let alert = this.alertCtrl.create(
    {

     title:'CONFIRM YOUR LOCATION AND DESTINATION!',
       message:'Your Location is   ' + this.location +' and Destination is  ' + this.destination,
       buttons: ['okay']
    }
  );
  alert.present();

  this.http.post(this.baseUrl + '/address', body).subscribe((data) => {
    console.log(data);
    this.location = '';
    this.destination = '';
   
  });

  


}

//////////////////////////////////////////
ionViewWillEnter() {
  console.log('ionViewDidLoad ViewPostsPage');
  this.getInfo();
}

getInfo(): any {
  this.http.get(this.baseUrl + '/address').subscribe((data) => {
    if (data) {
      console.log(data);
      this.order = data;
    }
  })
}


}
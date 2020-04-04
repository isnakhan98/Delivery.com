import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-order-now',
  templateUrl: 'order-now.html',
})
export class OrderNowPage {
call:any=[];
destination:any;
baseUrl = "http://localhost:2000"

  constructor(public http: HttpClient,private alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController) {
    // this.call=this.navParams.get('dealsObject');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderNowPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  closeModal() {
    this.viewCtrl.dismiss();
  }
  onSubmit() {
    if (this.destination) {
      this.post();
      
    }
    else {
      // console.log('Please add information');
      let alert = this.alertCtrl.create(
        {

          //title:'YOUR ORDER HAS BEEN PLACED!',
          message: 'Please enter your  destination',
          buttons: ['okay']
        }
      );
      alert.present();

    }

  }
  post() {
    

    let body =
    { 
      
      'destination': this.destination,
    
    }
    console.log('isna you rock');
     this.http.post(this.baseUrl + '/orders', body).subscribe((data) => {
      console.log(data);
     
      this.destination = '';
     
    });
    let alert = this.alertCtrl.create(
      {
  
       title:'YOUR ORDER  HAS BEEN PLACED SUCCESSFULLY!',
         message:'Our Rider Muhammad Amir is on his way to deliver your product',
         buttons: ['okay']
      }
    );
    alert.present();
  
   
  
    
  
  
  }
}

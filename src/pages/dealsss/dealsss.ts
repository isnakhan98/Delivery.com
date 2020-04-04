import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DealsProvider } from '../../providers/deals/deals';
// import { ToastController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';
@IonicPage()
@Component({
  selector: 'page-dealsss',
  templateUrl: 'dealsss.html',
})
export class DealsssPage {
  notifyTime: any;
  notifications: any[] = [];
  days: any[];
  chosenHours: number;
  chosenMinutes: number;

  d:any;
  
  //to display the  deals
  display:any;



  
  constructor(public localNotifications: LocalNotifications,public deals: DealsProvider,public navCtrl: NavController, public navParams: NavParams) {
  
    // this.deal=this.deals.r_deals;
  this.d=this.navParams.get('dealsObject');

this.display=this.deals.get_respective_deals(this.d.resid);

/////////////////////////////////////////////
  
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsssPage');
  }

  //////////////////////////////////////////

}

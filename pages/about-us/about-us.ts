import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ToastController}from'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {
  hideMe:boolean;
  hideMe1:boolean;
  hideMe2:boolean;
  //public buttonClicked: boolean = false;
  constructor(private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,  ) {
  }
//   public onButtonClick() {

//     this.buttonClicked = !this.buttonClicked;
// }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

    hide() {
      this.hideMe = true;
    }
    // hide() {
    //   this.hideMe = true;
    // }
    // hide2() {
    //   this.hideMe2 = true;
    // }

    popover_func() {
      let toast = this.toastCtrl.create({
        message: '+92-3460315608',
        duration: 10000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'okay'
    
      });
    
      toast.onDidDismiss(() => {
     
       console.log('Dismissed toast');
      });
    
      toast.present();
    }
    popover1_func() {
      let toast = this.toastCtrl.create({
        message: 'Delivery.com@gmail.com',
        duration: 10000,
        position: 'center',
        showCloseButton: true,
        closeButtonText: 'okay'
    
      });
    
      toast.onDidDismiss(() => {
     
       console.log('Dismissed toast');
      });
    
      toast.present();
    }
    popover2_func() {
      let toast = this.toastCtrl.create({
        message: 'Delivery.com@gmail.com',
        duration: 10000,
        position: 'bottom',
        showCloseButton: true,
        closeButtonText: 'okay'
    
      });
    
      toast.onDidDismiss(() => {
     
       console.log('Dismissed toast');
      });
    
      toast.present();
    }
}

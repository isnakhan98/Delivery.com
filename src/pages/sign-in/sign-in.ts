import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectionPage } from '../selection/selection';
// import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-sign-in',
   templateUrl: 'sign-in.html',
 
})
export class SignInPage {
// user={
//   name:'isna khan', password:'123'
// };

// information:any;


  constructor(private alertCtrl: AlertController,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams)
   {

    // this.information=this.loginprovider.users;    
   }
  
   ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }


  goto_selectionpage()
   {
   // this.loginprovider.login(this.user.name,this.user.password).then(success=>{
//     if(success){
// this.navCtrl.setRoot('SelectionPage');
   

//     }})

// .catch(err => { 
//   let alert = this.alertCtrl.create(
//   {
    
//     // title:'enter again!',
//     message:'Icorrect username or password!',
//     buttons:['okay']
//   }
// );
// alert.present();

// });
 
  
    this.navCtrl.push(SelectionPage);
}
}


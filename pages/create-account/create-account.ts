import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInPage } from '../sign-in/sign-in';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  baseUrl = "http://localhost:2000"
  username: string = '';
  password: string = '';
  email_address: string = '';
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  onSubmit() {
    if (this.username && this.password && this.email_address) {
      this.post();
      
    }
    else {
      // console.log('Please add information');
      let alert = this.alertCtrl.create(
        {

          // title:'enter again!',
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
      'username': this.username,
      'password': this.password,
      'email_address': this.email_address
    }

    this.http.post(this.baseUrl + '/posts', body).subscribe((data) => {
      console.log(data);
      this.username = '';
      this.password = '';
      this.email_address = '';

    });

    this.navCtrl.push(SignInPage);
  }
}

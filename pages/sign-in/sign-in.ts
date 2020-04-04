import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SelectionPage } from '../selection/selection';
// import { LoginProvider } from '../../providers/login/login';
import { AlertController } from 'ionic-angular';
import { CreateAccountPage } from '../create-account/create-account';
import { HttpClient } from '@angular/common/http';
import { ProductsPage } from '../products/products';

@IonicPage()

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',

})
export class SignInPage {
 

  // information:any;
  baseUrl = "http://localhost:2000"
  name: string = '';
  pass: string = '';
  info: any = [];
  d:any=[];
  constructor(public http: HttpClient, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
//this.getInfo();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');}

    
  ionViewWillEnter() {
    console.log('ionViewDidLoad ViewPostsPage');
    this.getInfo();
  }


  getInfo(): any {
    this.http.get(this.baseUrl + '/posts').subscribe((data) => {
      if (data) {
        console.log(data);
        this.info = data;
      }
    })
  }

 
goto_selectionpage()
{
  for(let d of this.info)
  {
  if (d.username==this.name && d.password==this.pass)
  {console.log('running yayyyy');
    this.navCtrl.push(SelectionPage);
    //this.navCtrl.push(ProductsPage,{dealsObject : d});

  }//if
 else {
    console.log('Please add information');
  
   }


}  //for
}//function
      
 
  goto_accountcreation()
  {
    this.navCtrl.push(CreateAccountPage);
  }
 
}



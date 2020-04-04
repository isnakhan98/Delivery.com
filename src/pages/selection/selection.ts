import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
// import { MenuController } from 'ionic-angular';
import { FoodPage } from '../food/food';
import { ProductsPage } from '../products/products';



@IonicPage()
@Component({
  selector: 'page-selection',
  templateUrl: 'selection.html',
})
export class SelectionPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectionPage');
  }
  gotofood()
  {
    this.navCtrl.push(FoodPage);
  }
  gotoproducts()
  {this.navCtrl.push(ProductsPage);
  }
// OpenMenu()
// {
//   this.menuCtrl.open();
// }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DealsssPage } from '../dealsss/dealsss';
import { DealsProvider } from '../../providers/deals/deals';


@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})

export class FoodPage {

restaurant:any;
res_deals:any;

  constructor(public deals: DealsProvider,public navCtrl: NavController, public navParams: NavParams) {

    // this.message=this.dataSource.messages;
    this.restaurant=this.deals.restaurants;
    this.res_deals=this.deals.r_deals;


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');}


    show_deals(d:any)
{
  this.navCtrl.push(DealsssPage,{dealsObject : d});
}

}

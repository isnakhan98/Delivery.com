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

// this.food_pictures.push(
  
//   {img:"../assets/imgs/kfc.png"},

//   {img:"../assets/imgs/bambou.png"},

//   {img:"../assets/imgs/14thstreet.png"},
  
//   {img:"../assets/imgs/chinatown.png"},

//   {img:"../assets/imgs/hardees.jpg"},

//   {img:"../assets/imgs/pizzahut.png"},

//   {img:"../assets/imgs/gloriajeans.png"},

//   {img:"../assets/imgs/chinatown.png"}
  
// );
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodPage');}


//     open_chat(chat:any)
// {
// //  this.navCtrl.push(MessagesPage,{chatObject : chat});
// let myModal = this.modalCtrl.create(MessagesPage,{chatObject : chat});
//     myModal.present();
// }

    show_deals(d:any)
{
  this.navCtrl.push(DealsssPage,{dealsObject : d});
}

}

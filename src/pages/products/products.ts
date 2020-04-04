import { Component,ElementRef,ViewChild } from '@angular/core';
// import{Page} from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import{MapDirective} from '../../components/map/map';
 //import{MapComponent} from '../../components/map/map';

// declare var google:any;

@IonicPage()
  @Component({
  selector: 'page-products',
  templateUrl:'products.html'

 })

// @Page(
//   {
//     templateUrl:'products.html',
//     directives:[MapDirective]
//   }
// )

export class ProductsPage {

// @ViewChild('map') mapRef:ElementRef;
// map:any;
//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     this.showMap();
//   }
//   //show map
//   showMap()
//   {
//     const location=new google.maps.LatLng(51.507351,-0.127758);

//     //map options
//     const options={
//       center:location,
//       zoom:10
//     };
//     this.map=new google.maps.Map(this.mapRef.nativeElement,options);
//   }

constructor()
{}
}

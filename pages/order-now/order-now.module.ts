import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderNowPage } from './order-now';

@NgModule({
  declarations: [
    OrderNowPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderNowPage),
  ],
})
export class OrderNowPageModule {}

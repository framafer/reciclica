import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickupCallForgottenPageRoutingModule } from './pickup-call-forgotten-routing.module';

import { PickupCallForgottenPage } from './pickup-call-forgotten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallForgottenPageRoutingModule
  ],
  declarations: [PickupCallForgottenPage]
})
export class PickupCallForgottenPageModule {}

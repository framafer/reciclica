// pickup-call.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PickupCallPageRoutingModule } from './pickup-call-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PickupCallPage } from './pickup-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickupCallPageRoutingModule,
    SharedModule,  // Asegúrate de importar SharedModule aquí
  ],
  declarations: [PickupCallPage],
})
export class PickupCallPageModule {}

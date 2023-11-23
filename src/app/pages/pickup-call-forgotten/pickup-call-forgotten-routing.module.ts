import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickupCallForgottenPage } from './pickup-call-forgotten.page';

const routes: Routes = [
  {
    path: '',
    component: PickupCallForgottenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickupCallForgottenPageRoutingModule {}

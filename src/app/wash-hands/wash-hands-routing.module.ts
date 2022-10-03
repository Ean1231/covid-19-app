import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashHandsPage } from './wash-hands.page';

const routes: Routes = [
  {
    path: '',
    component: WashHandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashHandsPageRoutingModule {}

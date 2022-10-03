import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisinfectPage } from './disinfect.page';

const routes: Routes = [
  {
    path: '',
    component: DisinfectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisinfectPageRoutingModule {}

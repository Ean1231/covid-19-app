import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashHandsPageRoutingModule } from './wash-hands-routing.module';

import { WashHandsPage } from './wash-hands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashHandsPageRoutingModule
  ],
  declarations: [WashHandsPage]
})
export class WashHandsPageModule {}

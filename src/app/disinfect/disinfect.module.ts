import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisinfectPageRoutingModule } from './disinfect-routing.module';

import { DisinfectPage } from './disinfect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisinfectPageRoutingModule
  ],
  declarations: [DisinfectPage]
})
export class DisinfectPageModule {}

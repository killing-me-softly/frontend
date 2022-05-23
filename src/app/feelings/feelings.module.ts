import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeelingsPageRoutingModule } from './feelings-routing.module';

import { FeelingsPage } from './feelings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeelingsPageRoutingModule
  ],
  declarations: [FeelingsPage]
})
export class FeelingsPageModule {}

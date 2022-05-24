import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogInRoutingModule } from './log-in-routing.module';

import { LogInComponent } from './log-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogInRoutingModule
  ],
  declarations: [LogInComponent]
})
export class LogInComponentModule {}

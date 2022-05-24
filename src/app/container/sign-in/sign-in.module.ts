import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInRoutingModule } from './sign-in-routing.module';

import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInRoutingModule
  ],
  declarations: [SignInComponent]
})
export class SignInComponentModule {}

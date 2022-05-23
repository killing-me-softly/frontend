import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInFormRoutingModule } from './sign-in-form-routing.module';

import { SigninForm } from './sign-in-form.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    SignInFormRoutingModule
  ],
  declarations: [SigninForm]
})
export class SignInFormModule {}

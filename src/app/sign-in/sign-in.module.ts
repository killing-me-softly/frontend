import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignInRoutingModule } from './sign-in-routing.module';

import { SignInComponent } from './sign-in.component';
import { PageStepsComponent } from './page-steps/page-steps.component';
import { AddContactComponent } from './add-contact/add-contact.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignInRoutingModule
  ],
  declarations: [SignInComponent, PageStepsComponent, AddContactComponent]
})
export class SignInComponentModule {}

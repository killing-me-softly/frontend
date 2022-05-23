import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowWasTheDayPageRoutingModule } from './how-was-the-day-routing.module';

import { HowWasTheDayPage } from './how-was-the-day.page';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { FeelingsPageModule } from './feelings/feelings.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    HowWasTheDayPageRoutingModule,
    FeelingsPageModule
  ],
  declarations: [HowWasTheDayPage]
})
export class HowWasTheDayPageModule {}

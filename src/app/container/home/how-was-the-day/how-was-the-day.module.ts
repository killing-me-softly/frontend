import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { IonicModule } from '@ionic/angular';
import { ActivitiesPageModule } from './activities/activities.module';
import { FeelingsPageModule } from './feelings/feelings.module';
import { HowWasTheDayPageRoutingModule } from './how-was-the-day-routing.module';
import { HowWasTheDayPage } from './how-was-the-day.page';
import { WhatDidHeSayPageModule } from './what-did-he-say/what-did-he-say.module';
import { WhatDidHeSayPage } from './what-did-he-say/what-did-he-say.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatIconModule,
    HowWasTheDayPageRoutingModule,
    FeelingsPageModule,
    ActivitiesPageModule,
    WhatDidHeSayPageModule
  ],
  declarations: [HowWasTheDayPage]
})
export class HowWasTheDayPageModule {}

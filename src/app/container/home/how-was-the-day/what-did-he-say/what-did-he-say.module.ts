import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatDidHeSayPageRoutingModule } from './what-did-he-say-routing.module';

import { WhatDidHeSayPage } from './what-did-he-say.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatDidHeSayPageRoutingModule
  ],
  declarations: [WhatDidHeSayPage]
})
export class WhatDidHeSayPageModule {}

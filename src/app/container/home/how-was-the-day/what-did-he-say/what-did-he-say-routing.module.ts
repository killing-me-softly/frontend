import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatDidHeSayPage } from './what-did-he-say.page';

const routes: Routes = [
  {
    path: '',
    component: WhatDidHeSayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatDidHeSayPageRoutingModule {}

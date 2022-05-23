import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowWasTheDayPage } from './how-was-the-day.page';

const routes: Routes = [
  {
    path: '',
    component: HowWasTheDayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowWasTheDayPageRoutingModule {}

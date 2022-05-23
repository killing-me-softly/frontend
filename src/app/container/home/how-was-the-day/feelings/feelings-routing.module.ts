import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeelingsPage } from './feelings.page';

const routes: Routes = [
  {
    path: '',
    component: FeelingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeelingsPageRoutingModule {}

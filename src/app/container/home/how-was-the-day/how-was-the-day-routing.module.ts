import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowWasTheDayPage } from './how-was-the-day.page';

const routes: Routes = [
  {
    path: '',
    component: HowWasTheDayPage
  },

  {
    path: 'activities',
    loadChildren: () => import('./activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'what-did-he-say',
    loadChildren: () => import('./what-did-he-say/what-did-he-say.module').then( m => m.WhatDidHeSayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowWasTheDayPageRoutingModule {}

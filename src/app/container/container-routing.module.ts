import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerPage } from './container.page';

const routes: Routes = [
  {
    path: '',
    component: ContainerPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'log-in',
        loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInComponentModule)
      },
      {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInComponentModule)
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainerPageRoutingModule {}

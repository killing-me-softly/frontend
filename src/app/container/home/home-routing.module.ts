import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      // {
      //   path: 'home',
      //   loadChildren: () => import('./customer-home/customer-home.module').then(m => m.CustomerHomeModule)
      // },
      // {
      //   path: 'my-appointments',
      //   loadChildren: () => import('./my-appointments/my-appointments.module').then( m => m.MyAppointmentsPageModule)
      // },
      // {
      //   path: 'my-tickets',
      //   loadChildren: () => import('./my-tickets/my-tickets.module').then( m => m.MyTicketsPageModule)
      // }
    ],
  },
  {
    path: 'how-was-the-day',
    loadChildren: () => import('./how-was-the-day/how-was-the-day.module').then( m => m.HowWasTheDayPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

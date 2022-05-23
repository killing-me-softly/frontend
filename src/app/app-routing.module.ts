import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./container/container.module').then( m => m.ContainerPageModule)
  },
  {
    path: '',
    redirectTo: 'container',
    pathMatch: 'full'
  },
  {
    path: 'container',
    loadChildren: () => import('./container/container.module').then( m => m.ContainerPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

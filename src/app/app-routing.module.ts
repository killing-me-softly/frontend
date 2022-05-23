import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./container/container.module').then(m => m.ContainerPageModule)
  },
  {
    path: 'container',
    loadChildren: () => import('./container/container.module').then(m => m.ContainerPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./container/sign-in-form/sign-in-form.module').then(m => m.SignInFormModule)
  },
  {
    path: '',
    redirectTo: 'container',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

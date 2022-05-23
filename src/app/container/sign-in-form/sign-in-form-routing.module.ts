import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninForm } from './sign-in-form.page';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SigninForm,
    loadChildren: () => import('./sign-in-form.module').then(m => m.SignInFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInFormRoutingModule {}

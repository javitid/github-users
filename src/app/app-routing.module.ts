import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'overview'},
      {
        path: 'overview',
        component: OverviewComponent,
        data: {transitionName: 'backward'},
      },
      {
        path: 'details/:login',
        component: DetailsComponent,
        data: {transitionName: 'forward'},
      },
      {
        path: 'error',
        component: ErrorComponent,
        data: {transitionName: 'forward'},
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }

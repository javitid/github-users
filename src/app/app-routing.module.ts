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
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'details/:login',
        component: DetailsComponent,
      },
      {
        path: 'error',
        component: ErrorComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'overview'},
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'details',
        component: DetailsComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

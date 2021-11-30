import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routerTransition } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  title = 'github-users';

  getPageTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['transitionName'];
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  public user: User|undefined;

  constructor(
    private _dataService: DataService,
    private _router: Router,
  ) { }

  public goToDetails(user: User): void {
    // Save the selected user data in dataService
    this._dataService.setSelectedUser(user);

    //TODO: Retrieve userData from a resolver
    this._dataService.getUserDetails(user).subscribe(userDetails => {
      console.log(userDetails);
    });

    // Navigate to user details screen
    this._router.navigateByUrl('details');
  }
}

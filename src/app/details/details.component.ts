import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  user?: User;

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit(): void {
    const userLogin = this._dataService.getSelectedUser()?.login;

    // TODO: Add spinner

    // TODO: Retrieve list of user's repositories and followers
    this._dataService.getUserDetails(userLogin).subscribe(userDetails => {
      this.user = userDetails;
    })
    ;
  }
}

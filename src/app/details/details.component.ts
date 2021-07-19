import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';
import { Repo } from '../interfaces/Repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  followers?: User[];
  user?: User;
  repos?: Repo[];

  constructor(
    private _dataService: DataService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    const userLogin = this._router.parseUrl(this._router.url).root.children.primary.segments[1].path;

    // Retrieve user's details
    this._dataService.getUserDetails(userLogin).subscribe(userDetails => {
      this.user = userDetails;
    });

    // Retrieve list of user's followers
    this._dataService.getUserFollowers(userLogin).subscribe(followers => {
      this.followers = followers;
    });
    
    // Retrieve list of user's repositories
    this._dataService.getUserRepositories(userLogin).subscribe(repos => {
      this.repos = repos;
    });
  }
}

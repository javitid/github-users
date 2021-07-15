import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';
import { UsersSearch } from '../interfaces/UsersSearch';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  public search = new FormControl('');
  public users?: User[];

  constructor(
    private _dataService: DataService,
  ) { }

  ngOnInit() {
    this.users = this._dataService.users;
    this.search.valueChanges
    .pipe(debounceTime(300))
    .subscribe((query: string) => {
      this._dataService.retrieveUsers(query).subscribe((usersSearch: UsersSearch) => {
        this.users = usersSearch.items;
      });
    })
  }
}

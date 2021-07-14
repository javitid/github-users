import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  users?: User[];

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
